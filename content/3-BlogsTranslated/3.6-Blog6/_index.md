---
title: "S3 annotations"
date: 2026-06-16
weight: 6
chapter: false
pre: " <b> 3.6. </b> "
---

# Amazon S3 annotations

#### 1. Source information

| Item | Details |
|---|---|
| Original title | Amazon S3 annotations: attach rich, queryable context directly to your objects |
| Source | [AWS News Blog](https://aws.amazon.com/blogs/aws/amazon-s3-annotations-attach-rich-queryable-context-directly-to-your-objects/) |
| Topic | Amazon S3, metadata, queryable object context |

![Original blog illustration](/images/3-BlogsTranslated/3.6-Blog6/hero.png)

#### 2. Summary

**S3 annotations** attach rich business context directly to objects: up to **1,000** named annotations per object, **1 MB** each, totaling up to **1 GB** per object, in JSON, XML, YAML, or plain text. Annotations are mutable without rewriting objects.

#### 3. Main content

**3.1. Role of annotations**

Context moves with objects during copy, replication, and cross-region transfers, and is removed when the object is deleted. With **S3 Metadata** enabled, annotations flow into managed Iceberg **annotation tables** queryable with **Amazon Athena**. Annotations can be queried for objects in **any storage class** without restoring objects or paying retrieval charges, including data in **S3 Glacier**.

Use cases highlighted in the article include:

- **Media & Entertainment:** transcripts, moderation results, subtitles, and rights metadata on video assets.
- **Financial Services:** AI-generated investment summaries and sentiment analysis on research documents, enabling agents to find datasets with natural-language queries.
- **Life Sciences:** regulatory status, patient cohort context, and approval trails on clinical trial data; context remains accessible for data stored in **Amazon S3 Glacier** without retrieval charges.

**3.2. Comparison with existing metadata**

| Capability | Max size | Mutable? | Best for |
|---|---|---|---|
| System-defined metadata | Fixed | No | Object properties |
| User-defined metadata | **2 KB** | No (set at upload) | Small key-value pairs |
| Object tags | **10 tags**, **128/256** characters per key/value | Yes | Access control, lifecycle, cost allocation |
| Annotations | **1 GB** (1,000 × 1 MB) | Yes | Rich business context (JSON, XML, YAML, text) |

**3.3. Basic usage**

Requires `s3:PutObjectAnnotation` and `s3:GetObjectAnnotation`. For multipart uploads, attach annotations **after** the upload completes. Multiple named annotations can coexist on one object for concurrent enrichment workflows.

Example command to attach a JSON technical annotation:

```bash
aws s3api put-object-annotation \
  --bucket my-media-bucket \
  --key videos/documentary-2026.mp4 \
  --annotation-name mediainfo \
  --annotation-payload ./mediainfo.json
```

| API | Purpose |
|---|---|
| `GetObjectAnnotation` | Read a specific annotation |
| `ListObjectAnnotations` | List all annotations on an object |
| `DeleteObjectAnnotation` | Delete an annotation |
| `PutObjectAnnotation` (same name) | Update an existing annotation |

![Add annotations](/images/3-BlogsTranslated/3.6-Blog6/figure-1.png)

![List annotations](/images/3-BlogsTranslated/3.6-Blog6/figure-2.png)

**3.4. Large-scale querying**

Enable annotation tables via the console or `CreateBucketMetadataConfiguration` / `UpdateBucketMetadataAnnotationTableConfiguration`. Journal tables update in near real time; annotation tables refresh within about **one hour**. Backfill of existing annotations may take **hours to days**. Natural-language discovery is supported through **Amazon SageMaker Unified Studio** agents or the **S3 Tables MCP server**.

- **Journal tables:** update in near real time for tracking annotation changes.
- **Annotation tables:** refresh in about **one hour** and adapt to JSON/XML/YAML structure, with each annotation represented as a row and content available in `text_value`.
- Existing annotated objects are backfilled in the background; duration can range from **hours to days** depending on object volume.

Example Athena query to find videos with more than 8 audio tracks:

```sql
SELECT DISTINCT bucket, object_key
FROM "s3tablescatalog/aws-s3"."b_my_media_bucket"."annotation"
WHERE name = 'mediainfo'
AND CAST(json_extract_scalar(text_value, '$.audio_tracks') AS INTEGER) > 8
```

Example query to monitor new annotations in the last 24 hours through the journal table:

```sql
SELECT bucket, key, version_id, record_timestamp, annotation.name
FROM "s3tablescatalog/aws-s3"."b_my_media_bucket"."journal"
WHERE record_timestamp >= (current_date - interval '1' day)
AND annotation.name IS NOT NULL
AND record_type IN ('CREATE_ANNOTATION', 'DELETE_ANNOTATION')
```

**3.5. Availability and pricing**

- **Annotations:** available in **all AWS Regions**, including **AWS China Regions**.
- **Annotation tables:** available in Regions where **S3 Metadata** is available.
- Annotation storage is billed at **S3 Standard** rates even when the parent object uses Glacier or another storage class.

#### 4. Remarks

The article addresses a common data-management limitation: business metadata often lives in external databases or sidecar files, creating synchronization cost and drift risk. S3 annotations attach context directly to objects, support independent updates, and move with objects during copy or replication, reducing the operational burden of separate metadata systems.

Technically, annotations offer much larger and more flexible context than tags or user-defined metadata, and multiple named annotations can coexist on one object. Indexing into Iceberg tables and querying with Athena extends annotations from per-object operations to bucket-scale analysis. Querying annotations without restoring cold-storage objects is also valuable for long-term archives and compliance audits.

For data lakes, digital-asset management, and agentic discovery workflows, the article provides a practical approach to unified metadata. Adoption should consider S3 Standard billing for annotation storage, annotation-table refresh latency, backfill duration, and related API permissions.
