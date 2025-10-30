# PROMPT_DEV_9.md

# 🤖 PROMPT CHO DEV-9: TESTING (E2E) + DEVOPS SPECIALIST
## 📋 **YOUR ASSIGNMENT**
**Role**: DEV-9 - Testing (E2E) + DevOps Specialist
**Timeline**: Phase 5 (Week 5-6) - Testing & Deployment Layer
**Critical**: Bạn là blocking dependency cho DEV-10, DEV-11 (docs & deploy guides)
---
## 📚 **TÀI LIỆU ĐẶC TẮT DỰ ÁN**
### **1. ĐỌC TÀI LIỆU SRS**
```bash
File: SRS-Grok-V2.md
Mô tả: Software Requirements Specification - Đặc tả yêu cầu hoàn chỉnh
Nội dung: Tất cả business requirements, technical requirements, API specs
Sections quan trọng cho DEV-9:
- Part13.3 E2E Testing (full flows)
- Part14.1 Container Orchestration (Docker)
- Part14.4 Kubernetes
- Part14.3 Monitoring Stack (Prometheus/Grafana)
- Part15.2 CI/CD Pipelines (workflows)
- EMSA-v1.0 DevOps Standards (K8s manifests)
```
### **2. XEM CÔNG VIỆC CỦA BẠN**
```bash
File: DEV_ASSIGNMENT_PLAN_FULL.md
Section: "DEV-9 – E2E + DevOps (12 files)"
Files assigned: 12 files (4 E2E tests + k8s manifests + monitoring + scripts + workflows)
Ưu tiên implement:
1. tests/e2e/authentication.e2e.test.ts (Week 5 - Critical)
2. Other E2E tests (Week 5)
3. k8s manifests & monitoring (Week 6)
4. scripts & workflows (Week 6)
```
### **DEV-9** – E2E + DevOps (12 files)

| File | Mô tả |
|------|------|
| `tests/e2e/authentication.e2e.test.ts` | Full flow |
| `tests/e2e/user-management.e2e.test.ts` | |
| `tests/e2e/rbac.e2e.test.ts` | |
| `tests/e2e/otp.e2e.test.ts` | |
| `k8s/identity-hpa.yaml` | Auto-scale |
| `k8s/identity-ingress.yaml` | |
| `monitoring/alertmanager/identity-alerts.yaml` | |
| `scripts/load-test.sh` | k6 |
| `scripts/stress-test.sh` | |
| `.github/workflows/e2e.yml` | |
| `.github/workflows/load-test.yml` | |
| `docker-compose.test.yml` | Test DB |

### **3. HƯỚNG DẪN IMPLEMENTATION**
```bash
File: 1.prod-structure-other-structure.md
Bảng: "BẢNG TỔNG HỢP TẤT CẢ FILES VÀ REFERENCES"
VÍ DỤ sử dụng bảng:
File Path: backend/tests/e2e/authentication.e2e.test.ts
SRS Reference: Part13.3 E2E Testing
Business Purpose: Full authentication flow validation
→ Đọc SRS-Grok-V2.md > Part13.3 → Implement authentication.e2e.test.ts
```
---
## 🏗️ **QUY ĐỊNH KIẾN TRÚC - TESTING & DEVOPS LAYER**
### **E2E Test Pattern**
```typescript
// tests/e2e/authentication.e2e.test.ts
describe('Authentication E2E', () => {
  it('should login successfully', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ email: 'test@example.com', password: 'password' });
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});
```
### **K8s Manifest Pattern**
```yaml
# k8s/identity-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: identity-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: identity
  template:
    metadata:
      labels:
        app: identity
    spec:
      containers:
      - name: identity
        image: identity-service:1.0.0
        ports:
          - containerPort: 3000
```
---
## 🔄 **WORKFLOW CHO DEV-9**
### **Week 5-6: E2E & DevOps**
```bash
Day 1-2:
- Đọc SRS Part13.3 hoàn toàn
- Implement authentication.e2e.test.ts
Day 3-4:
- Implement user-management.e2e.test.ts, otp.e2e.test.ts, rbac.e2e.test.ts
Day 5-7:
- Implement k8s manifests (deployment, service, configmap, secrets)
- Implement monitoring (prometheus, grafana)
- Implement scripts/load-test.sh
- Update workflows/e2e.yml
```
### **Implementation Loop cho mỗi file**:
```bash
1. Tìm file trong bảng mapping
2. Đọc SRS Reference
3. Implement theo pattern trên
4. Test: npm test
5. Move to next
```
---
## ✅ **DELIVERABLES CHO DEV-9**
### **End of Week 5**:
- [ ] All 4 E2E tests implemented
- [ ] E2E coverage 95%+
### **End of Week 6**:
- [ ] All 12 files implemented
- [ ] K8s & monitoring stable
---
## 💬 **COORDINATION CHO DEV-9**
### **Bạn Block (Critical Dependencies)**:
- **DEV-10**: Cần E2E để docs
- **DEV-11**: Cần DevOps để deploy guides
### **Communication**:
- Test failures → Notify ALL immediately
- Manifest changes → Coordinate với DEV-0
---
**🎯 TÓM TẮT: Đọc SRS (focus Part13.3, Part14.1), implement 12 E2E & DevOps files theo mapping table, hoàn thành Week 5-6 để unblock other developers.**
```
