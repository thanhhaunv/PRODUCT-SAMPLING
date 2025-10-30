# PROMPT_DEV_11.md

# 🤖 PROMPT CHO DEV-11: DEPLOYMENT GUIDE ENGINEER
## 📋 **YOUR ASSIGNMENT**
**Role**: DEV-11 - Deployment Guide Engineer
**Timeline**: Phase 6 (Week 7-8) - Final Deployment Layer
**Critical**: Bạn là blocking dependency cho release production
---
## 📚 **TÀI LIỆU ĐẶC TẢ DỰ ÁN**
### **1. ĐỌC TÀI LIỆU SRS**
```bash
File: SRS-Grok-V2.md
Mô tả: Software Requirements Specification - Đặc tả yêu cầu hoàn chỉnh
Nội dung: Tất cả business requirements, technical requirements, API specs
Sections quan trọng cho DEV-11:
- Part14.1 Container Orchestration (Docker/K8s)
- Part14.3 Monitoring Stack (Prometheus/Grafana)
- Part14.4 Kubernetes Manifests
- Part15.2 CI/CD Pipelines (deployment automation)
- EMSA-v1.0 Deployment Standards (K8s, CI/CD)
```
### **2. XEM CÔNG VIỆC CỦA BẠN**
```bash
File: DEV_ASSIGNMENT_PLAN_FULL.md
Section: "DEV-11 – Deployment Guide Engineer (5 files)"
Files assigned: 5 files (4 deployment docs + 1 script)
Ưu tiên implement:
1. docs/deployment/DEPLOY_SHARED_PACKAGES.md (Week 7 - Critical)
2. docs/deployment/DEPLOY_IDENTITY_SERVICE.md (Week 7)
3. docs/deployment/DEPLOY_ALL_MICROSERVICES.md (Week 8)
4. docs/deployment/PRODUCTION_CHECKLIST.md (Week 8)
5. scripts/deploy-all.sh (Week 8)
```
### **3. HƯỚNG DẪN IMPLEMENTATION**
```bash
File: 1.prod-structure-other-structure.md
Bảng: "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"
VÍ DỤ sử dụng bảng:
File Path: backend/docs/deployment/production-procedures.md
SRS Reference: Part14 Deployment Architecture
Business Purpose: Production deployment procedures
→ Đọc SRS-Grok-V2.md > Part14 → Write DEPLOY_ALL_MICROSERVICES.md
```
---
## 🏗️ **QUY ĐỊNH KIẾN TRÚC - DEPLOYMENT LAYER**
### **Deployment Doc Pattern**
```markdown
// docs/deployment/DEPLOY_SHARED_PACKAGES.md
# Deployment Shared Packages
## Prerequisites
- NPM registry access
- Git clone repos

## Steps
1. cd shared-core
2. npm run build
3. npm publish
// Include scripts & troubleshooting từ SRS Part15.2
```
### **Script Pattern**
```bash
// scripts/deploy-all.sh
#!/bin/bash
# Deploy all 7 microservices + 3 shared
kubectl apply -f k8s/
# Monitoring setup từ SRS Part14.3
echo "Deploy complete"
```
---
## 🔄 **WORKFLOW CHO DEV-11**
### **Week 7-8: Full Guides**
```bash
Day 1-2:
- Đọc SRS Part14.1 hoàn toàn
- Write DEPLOY_SHARED_PACKAGES.md
Day 3-4:
- Write DEPLOY_IDENTITY_SERVICE.md
Day 5-7:
- Write DEPLOY_ALL_MICROSERVICES.md
- Write PRODUCTION_CHECKLIST.md
Day 8-14:
- Implement deploy-all.sh
- Test scripts & docs
```
### **Implementation Loop cho mỗi file**:
```bash
1. Tìm file trong bảng mapping
2. Đọc SRS Reference
3. Write doc/script theo pattern trên
4. Test: Run script
5. Move to next
```
---
## ✅ **DELIVERABLES CHO DEV-11**
### **End of Week 7**:
- [ ] DEPLOY_SHARED_PACKAGES.md, DEPLOY_IDENTITY_SERVICE.md
### **End of Week 8**:
- [ ] All 5 files implemented
- [ ] deploy-all.sh chạy được
---
## 💬 **COORDINATION CHO DEV-11**
### **Bạn Block (Critical Dependencies)**:
- **Release Production**: Cần guides để deploy
### **Communication**:
- Guide changes → Notify ALL immediately
- Script issues → Coordinate with DEV-9
---
**🎯 TÓM TẮT: Đọc SRS (focus Part14.1, Part15.2), implement 5 deployment files theo mapping table, hoàn thành Week 7-8 để release production.**
```
