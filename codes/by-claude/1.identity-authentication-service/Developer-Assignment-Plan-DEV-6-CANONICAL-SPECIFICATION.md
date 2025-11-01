# DEV-6 ULTRA HIGH CONSISTENCY CANONICAL SPECIFICATION
**Version**: 2.0 - Maximum Consistency  
**Target Consistency**: 99-100%  
**Strategy**: Presentation & External Services Zero-Variation Templates

---

## 🎯 **ASSIGNMENT OVERVIEW**

**Role**: External Services & Controllers Specialist  
**Timeline**: Week 3-4 (Infrastructure + Presentation Layer)  
**Critical**: BLOCKING DEPENDENCY for DEV-8, DEV-9  
**Files**: 20 files (4 Controllers + 4 External Services + 4 Middleware + 8 Validators)

### **SRS References (EXACT ORDER)**:
- **Part08.1 API Design** - REST endpoints specification
- **Part07.2.4 OTP Management** - Twilio/Email adapters
- **Part05.3 Security Requirements** - Authentication & authorization middleware

---

## 🏗️ **ZERO-VARIATION PRESENTATION FOUNDATIONS**

### **1. EXACT ERROR CONSTANTS (100% IDENTICAL - COPY ALL)**
```typescript
// Refs: Part08.1 API Design + Part05.3 Security Requirements + Part07.2.4 OTP Management
const PRESENTATION_ERRORS = {
  // Request/Response errors
  INVALID_REQUEST: 'Invalid request format',
  MISSING_HEADERS: (header: string) => `Missing required header: ${header}`,
  INVALID_CONTENT_TYPE: 'Invalid content type. Expected application/json',
  REQUEST_TIMEOUT: 'Request timeout exceeded',
  PAYLOAD_TOO_LARGE: 'Request payload too large',
  
  // Authentication errors - Refs: Part05.3 Security Requirements
  MISSING_AUTH_HEADER: 'Authorization header is required',
  INVALID_AUTH_HEADER: 'Invalid authorization header format',
  TOKEN_EXPIRED: 'Authentication token has expired',
  TOKEN_INVALID: 'Invalid authentication token',
  TOKEN_MALFORMED: 'Malformed authentication token',
  
  // Authorization errors - RBAC
  INSUFFICIENT_PERMISSIONS: 'Insufficient permissions for this operation',
  ACCESS_DENIED: 'Access denied for this resource',
  FORBIDDEN_OPERATION: 'Operation forbidden for your role',
  RESOURCE_ACCESS_DENIED: (resource: string) => `Access denied to ${resource}`,
  
  // Validation errors
  VALIDATION_FAILED: 'Request validation failed',
  FIELD_REQUIRED: (field: string) => `Field '${field}' is required`,
  FIELD_INVALID: (field: string, reason: string) => `Field '${field}' is invalid: ${reason}`,
  EMAIL_INVALID: 'Invalid email format',
  PASSWORD_WEAK: 'Password does not meet security requirements',
  UUID_INVALID: (field: string) => `Field '${field}' must be a valid UUID`,
  
  // Rate limiting errors
  RATE_LIMIT_EXCEEDED: 'Rate limit exceeded. Please try again later',
  TOO_MANY_REQUESTS: (limit: number, window: string) => `Too many requests. Limit: ${limit} per ${window}`,
  IP_BLOCKED: 'IP address temporarily blocked due to suspicious activity',
  
  // External service errors - Refs: Part07.2.4 OTP Management
  TWILIO_SERVICE_ERROR: 'SMS service temporarily unavailable',
  TWILIO_INVALID_PHONE: 'Invalid phone number format',
  TWILIO_SEND_FAILED: 'Failed to send SMS message',
  EMAIL_SERVICE_ERROR: 'Email service temporarily unavailable',
  EMAIL_SEND_FAILED: 'Failed to send email message',
  CRM_SERVICE_ERROR: 'CRM service temporarily unavailable',
  CRM_SYNC_FAILED: 'Failed to sync data with CRM',
  
  // OTP specific errors
  OTP_SEND_LIMIT: 'OTP send limit exceeded for this phone number',
  OTP_VERIFICATION_LIMIT: 'OTP verification attempts exceeded',
  OTP_SERVICE_UNAVAILABLE: 'OTP service temporarily unavailable',
  PHONE_NUMBER_BLOCKED: 'Phone number blocked due to abuse',
  
  // Session errors
  SESSION_NOT_FOUND: 'Session not found or expired',
  SESSION_INVALID: 'Invalid session data',
  CONCURRENT_SESSION_LIMIT: 'Maximum concurrent sessions exceeded',
  
  // Generic errors
  INTERNAL_SERVER_ERROR: 'Internal server error occurred',
  SERVICE_UNAVAILABLE: 'Service temporarily unavailable',
  GATEWAY_TIMEOUT: 'Gateway timeout - please try again',
  CONTROLLER_ERROR: 'Controller operation failed',
  MIDDLEWARE_ERROR: 'Middleware processing failed'
};
```

### **2. EXACT IMPORT TEMPLATES (100% IDENTICAL)**

#### **Controller Import Template**:
```typescript
// Always this exact order - NO variations
import { Controller, Post, Get, Put, Delete, Body, Param, Query, Headers, HttpStatus, HttpException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Result } from '@psp/shared-core';
// Application layer imports
import { [USE_CASE_NAME] } from '../../application/use-cases/[DOMAIN]/[USE_CASE_NAME]';
import { [DTO_NAME] } from '../../application/dto/[DTO_NAME]';
// Presentation layer imports
import { AuthMiddleware } from '../middleware/AuthMiddleware';
import { RBACMiddleware } from '../middleware/RBACMiddleware';
import { ValidationMiddleware } from '../middleware/ValidationMiddleware';
```

#### **External Service Import Template**:
```typescript
// Always this exact order - NO variations
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Result } from '@psp/shared-core';
// External service SDKs
import { Twilio } from 'twilio'; // or relevant SDK
// Application ports
import { I[SERVICE_NAME] } from '../../application/ports/I[SERVICE_NAME]';
```

#### **Middleware Import Template**:
```typescript
// Always this exact order - NO variations
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
```

### **3. EXACT NAMING PATTERNS (ZERO VARIATION)**

#### **Controller Names (MANDATORY)**:
```typescript
// Controller class names - NO alternatives
AuthenticationController             // never "AuthController" or "LoginController"
UserController                      // never "UsersController" or "UserManagementController"
OTPController                       // never "OtpController" or "VerificationController"
SessionController                   // never "SessionsController" or "SessionManagementController"
```

#### **External Service Names (MANDATORY)**:
```typescript
// External service class names - NO alternatives
TwilioOTPAdapter                    // never "TwilioService" or "SMSAdapter"
EmailOTPAdapter                     // never "EmailService" or "MailAdapter"
CRMIntegrationAdapter               // never "CRMService" or "CRMAdapter"
JWTService                          // never "TokenService" or "JWTAdapter"
```

#### **Middleware Names (MANDATORY)**:
```typescript
// Middleware class names - NO alternatives
AuthMiddleware                      // never "AuthenticationMiddleware" or "JWTMiddleware"
RBACMiddleware                      // never "AuthorizationMiddleware" or "PermissionMiddleware"
RateLimitMiddleware                 // never "RateLimiterMiddleware" or "ThrottleMiddleware"
ValidationMiddleware                // never "ValidatorMiddleware" or "InputValidationMiddleware"
```

#### **Method Names (EXACT - NO ALTERNATIVES)**:
```typescript
// Controller methods
@Post('login') async login()                    // always "login"
@Post('register') async register()              // always "register"
@Post('logout') async logout()                  // always "logout"
@Get(':id') async getById()                     // always "getById"
@Get() async getAll()                           // always "getAll"
@Put(':id') async update()                      // always "update"
@Delete(':id') async delete()                   // always "delete"

// External service methods
async sendSMS(phone: string, message: string)   // always "sendSMS"
async sendEmail(email: string, subject: string) // always "sendEmail"
async syncToCRM(data: any)                      // always "syncToCRM"
async generateToken(payload: any)               // always "generateToken"
async verifyToken(token: string)                // always "verifyToken"
```

### **4. PARAMETER NAMING STANDARDS (100% IDENTICAL)**:
```typescript
// Controller parameters
@Body() requestDto: [DTO_TYPE]                  // always "requestDto"
@Param('id') id: string                         // always "id"
@Query() queryParams: [QUERY_DTO_TYPE]          // always "queryParams"
@Headers('authorization') authHeader: string    // always "authHeader"

// External service parameters
phone: string                                   // always "phone"
email: string                                   // always "email"
message: string                                 // always "message"
payload: any                                    // always "payload"
config: ServiceConfig                           // always "config"
```

---

## 🎮 **CONTROLLERS - PERFECT TEMPLATES**

### **File Structure (MANDATORY)**:
```
src/presentation/controllers/
├── AuthenticationController.ts                 # ✅ IMPLEMENT FIRST
├── UserController.ts                           # ✅ IMPLEMENT SECOND
├── OTPController.ts                            # ✅ IMPLEMENT THIRD
├── SessionController.ts                        # ✅ IMPLEMENT FOURTH
└── index.ts                                    # ✅ Export all controllers
```

### **Universal Controller Template (COPY-PASTE STRUCTURE)**:
```typescript
// Refs: [SRS_REFERENCE]
import { Controller, Post, Get, Put, Delete, Body, Param, Query, Headers, HttpStatus, HttpException, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Result } from '@psp/shared-core';
import { [USE_CASE_NAME] } from '../../application/use-cases/[DOMAIN]/[USE_CASE_NAME]';
import { [DTO_NAME] } from '../../application/dto/[DTO_NAME]';
import { AuthGuard } from '../guards/AuthGuard';
import { RBACGuard } from '../guards/RBACGuard';

@ApiTags('[CONTROLLER_TAG]')
@Controller('[ROUTE_PREFIX]')
export class [CONTROLLER_NAME] {
  constructor(
    private readonly [useCaseName]: [USE_CASE_TYPE]
  ) {}

  @ApiOperation({ summary: '[OPERATION_SUMMARY]' })
  @ApiResponse({ status: 200, description: '[SUCCESS_DESCRIPTION]' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard, RBACGuard)
  @[HTTP_METHOD]('[ENDPOINT_PATH]')
  async [methodName](
    @Body() requestDto: [REQUEST_DTO_TYPE],
    @Headers('authorization') authHeader: string
  ): Promise<[RESPONSE_DTO_TYPE]> {
    try {
      // Extract user context from auth header
      const userContext = this.extractUserContext(authHeader);
      
      // Execute use case
      const result = await this.[useCaseName].execute(requestDto, userContext.userId);
      
      if (result.isFailure) {
        throw new HttpException(
          result.error,
          this.mapErrorToHttpStatus(result.error)
        );
      }

      return result.getValue();
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      throw new HttpException(
        PRESENTATION_ERRORS.CONTROLLER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  private extractUserContext(authHeader: string): { userId: string; roles: string[] } {
    // JWT token extraction and validation logic
    return { userId: 'extracted-user-id', roles: ['extracted-roles'] };
  }

  private mapErrorToHttpStatus(error: string): HttpStatus {
    // Map domain errors to HTTP status codes
    if (error.includes('not found')) return HttpStatus.NOT_FOUND;
    if (error.includes('unauthorized')) return HttpStatus.UNAUTHORIZED;
    if (error.includes('forbidden')) return HttpStatus.FORBIDDEN;
    if (error.includes('validation')) return HttpStatus.BAD_REQUEST;
    return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
```

### **AuthenticationController.ts (EXACT IMPLEMENTATION - COPY ALL)**:
```typescript
// Refs: Part08.1.1 Authentication APIs
import { Controller, Post, Get, Body, Headers, HttpStatus, HttpException, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';
import { Result } from '@psp/shared-core';
import { LoginUseCase } from '../../application/use-cases/authentication/LoginUseCase';
import { LogoutUseCase } from '../../application/use-cases/authentication/LogoutUseCase';
import { RefreshTokenUseCase } from '../../application/use-cases/authentication/RefreshTokenUseCase';
import { VerifyOTPUseCase } from '../../application/use-cases/authentication/VerifyOTPUseCase';
import { LoginDto } from '../../application/dto/LoginDto';
import { VerifyOTPDto } from '../../application/dto/VerifyOTPDto';
import { RefreshTokenDto } from '../../application/dto/RefreshTokenDto';
import { LogoutDto } from '../../application/dto/LogoutDto';
import { JWTResponseDto } from '../../application/dto/JWTResponseDto';
import { OTPResponseDto } from '../../application/dto/OTPResponseDto';
import { AuthGuard } from '../guards/AuthGuard';
import { RateLimitGuard } from '../guards/RateLimitGuard';

@ApiTags('Authentication')
@Controller('api/auth')
export class AuthenticationController {
  constructor(
    private readonly loginUseCase: LoginUseCase,
    private readonly logoutUseCase: LogoutUseCase,
    private readonly refreshTokenUseCase: RefreshTokenUseCase,
    private readonly verifyOTPUseCase: VerifyOTPUseCase
  ) {}

  @ApiOperation({ summary: 'User login with email and password' })
  @ApiResponse({ status: 200, description: 'Login successful', type: JWTResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid credentials' })
  @ApiResponse({ status:401, description: 'Authentication failed' })
  @ApiResponse({ status: 429, description: 'Too many login attempts' })
  @UseGuards(RateLimitGuard)
  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Req() request: Request
  ): Promise<JWTResponseDto> {
    try {
      // Enrich DTO with request metadata
      const enrichedDto = {
        ...loginDto,
        ipAddress: request.ip,
        userAgent: request.get('User-Agent'),
        deviceInfo: request.get('X-Device-Info')
      };

      const result = await this.loginUseCase.execute(enrichedDto);
      
      if (result.isFailure) {
        throw new HttpException(
          result.error,
          this.mapAuthErrorToHttpStatus(result.error)
        );
      }

      return result.getValue();
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      throw new HttpException(
        PRESENTATION_ERRORS.CONTROLLER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @ApiOperation({ summary: 'Verify OTP code' })
  @ApiResponse({ status: 200, description: 'OTP verified successfully', type: OTPResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid OTP code' })
  @ApiResponse({ status: 429, description: 'Too many OTP attempts' })
  @UseGuards(RateLimitGuard)
  @Post('verify-otp')
  async verifyOTP(
    @Body() verifyOTPDto: VerifyOTPDto,
    @Req() request: Request
  ): Promise<OTPResponseDto> {
    try {
      const enrichedDto = {
        ...verifyOTPDto,
        ipAddress: request.ip,
        userAgent: request.get('User-Agent')
      };

      const result = await this.verifyOTPUseCase.execute(enrichedDto);
      
      if (result.isFailure) {
        throw new HttpException(
          result.error,
          this.mapOTPErrorToHttpStatus(result.error)
        );
      }

      return result.getValue();
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      throw new HttpException(
        PRESENTATION_ERRORS.CONTROLLER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @ApiOperation({ summary: 'Refresh authentication token' })
  @ApiResponse({ status: 200, description: 'Token refreshed successfully', type: JWTResponseDto })
  @ApiResponse({ status: 401, description: 'Invalid refresh token' })
  @ApiBearerAuth()
  @Post('refresh')
  async refreshToken(
    @Body() refreshTokenDto: RefreshTokenDto,
    @Headers('authorization') authHeader: string
  ): Promise<JWTResponseDto> {
    try {
      const result = await this.refreshTokenUseCase.execute(refreshTokenDto);
      
      if (result.isFailure) {
        throw new HttpException(
          result.error,
          HttpStatus.UNAUTHORIZED
        );
      }

      return result.getValue();
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      throw new HttpException(
        PRESENTATION_ERRORS.CONTROLLER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @ApiOperation({ summary: 'User logout' })
  @ApiResponse({ status: 200, description: 'Logout successful' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post('logout')
  async logout(
    @Body() logoutDto: LogoutDto,
    @Headers('authorization') authHeader: string
  ): Promise<{ message: string }> {
    try {
      const userContext = this.extractUserContext(authHeader);
      
      const result = await this.logoutUseCase.execute(logoutDto, userContext.userId);
      
      if (result.isFailure) {
        throw new HttpException(
          result.error,
          HttpStatus.BAD_REQUEST
        );
      }

      return { message: 'Logout successful' };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      throw new HttpException(
        PRESENTATION_ERRORS.CONTROLLER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @ApiOperation({ summary: 'Get current user authentication status' })
  @ApiResponse({ status: 200, description: 'Authentication status retrieved' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('status')
  async getAuthStatus(
    @Headers('authorization') authHeader: string
  ): Promise<{ authenticated: boolean; user: any }> {
    try {
      const userContext = this.extractUserContext(authHeader);
      
      return {
        authenticated: true,
        user: {
          id: userContext.userId,
          roles: userContext.roles
        }
      };
    } catch (error) {
      throw new HttpException(
        PRESENTATION_ERRORS.TOKEN_INVALID,
        HttpStatus.UNAUTHORIZED
      );
    }
  }

  private extractUserContext(authHeader: string): { userId: string; roles: string[] } {
    if (!authHeader) {
      throw new HttpException(
        PRESENTATION_ERRORS.MISSING_AUTH_HEADER,
        HttpStatus.UNAUTHORIZED
      );
    }

    // Extract and validate JWT token
    const token = authHeader.replace('Bearer ', '');
    if (!token) {
      throw new HttpException(
        PRESENTATION_ERRORS.INVALID_AUTH_HEADER,
        HttpStatus.UNAUTHORIZED
      );
    }

    // JWT validation logic would go here
    // For now, return mock data
    return {
      userId: 'extracted-user-id',
      roles: ['user']
    };
  }

  private mapAuthErrorToHttpStatus(error: string): HttpStatus {
    if (error.includes('not found')) return HttpStatus.NOT_FOUND;
    if (error.includes('invalid credentials')) return HttpStatus.UNAUTHORIZED;
    if (error.includes('suspended')) return HttpStatus.FORBIDDEN;
    if (error.includes('validation')) return HttpStatus.BAD_REQUEST;
    return HttpStatus.INTERNAL_SERVER_ERROR;
  }

  private mapOTPErrorToHttpStatus(error: string): HttpStatus {
    if (error.includes('invalid')) return HttpStatus.BAD_REQUEST;
    if (error.includes('expired')) return HttpStatus.BAD_REQUEST;
    if (error.includes('attempts')) return HttpStatus.TOO_MANY_REQUESTS;
    return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
```

---

## 🔌 **EXTERNAL SERVICES - PERFECT TEMPLATES**

### **File Structure (MANDATORY)**:
```
src/infrastructure/external-services/
├── TwilioOTPAdapter.ts                         # ✅ IMPLEMENT FIRST
├── EmailOTPAdapter.ts                          # ✅ IMPLEMENT SECOND
├── CRMIntegrationAdapter.ts                    # ✅ IMPLEMENT THIRD
├── JWTService.ts                               # ✅ IMPLEMENT FOURTH
└── index.ts                                    # ✅ Export all services
```

### **Universal External Service Template (COPY-PASTE STRUCTURE)**:
```typescript
// Refs: [SRS_REFERENCE]
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Result } from '@psp/shared-core';
import { I[SERVICE_NAME] } from '../../application/ports/I[SERVICE_NAME]';

@Injectable()
export class [SERVICE_CLASS_NAME] implements I[SERVICE_NAME] {
  private readonly config: [SERVICE_CONFIG_TYPE];

  constructor(private readonly configService: ConfigService) {
    this.config = this.loadConfiguration();
    this.validateConfiguration();
  }

  async [primaryMethod]([parameters]): Promise<Result<[RETURN_TYPE]>> {
    try {
      // Validate input parameters
      const validation = this.validateInput([parameters]);
      if (validation.isFailure) {
        return Result.fail(validation.error);
      }

      // Execute external service call
      const serviceResult = await this.callExternalService([parameters]);
      
      if (!serviceResult.success) {
        return Result.fail(this.mapServiceError(serviceResult.error));
      }

      // Map external service response to domain response
      const domainResponse = this.mapServiceResponse(serviceResult.data);
      
      return Result.ok(domainResponse);
    } catch (error) {
      return Result.fail(this.handleServiceError(error));
    }
  }

  private loadConfiguration(): [SERVICE_CONFIG_TYPE] {
    return {
      [configProperty]: this.configService.get<string>('[CONFIG_KEY]')
    };
  }

  private validateConfiguration(): void {
    if (!this.config.[configProperty]) {
      throw new Error('[SERVICE_NAME] configuration is missing');
    }
  }

  private validateInput([parameters]): Result<void> {
    // Input validation logic
    return Result.ok();
  }

  private async callExternalService([parameters]): Promise<any> {
    // External service call implementation
    return {};
  }

  private mapServiceResponse(data: any): [RETURN_TYPE] {
    // Map external service response to domain object
    return {} as [RETURN_TYPE];
  }

  private mapServiceError(error: any): string {
    // Map external service errors to domain errors
    return PRESENTATION_ERRORS.SERVICE_UNAVAILABLE;
  }

  private handleServiceError(error: any): string {
    // Handle unexpected service errors
    return PRESENTATION_ERRORS.INTERNAL_SERVER_ERROR;
  }
}
```

### **TwilioOTPAdapter.ts (EXACT IMPLEMENTATION - COPY ALL)**:
```typescript
// Refs: Part07.2.4 OTP Management + Part09.1.1 Twilio Integration
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';
import { Result } from '@psp/shared-core';
import { ISMSService, SendSMSRequest, SendSMSResponse } from '../../application/ports/ISMSService';

interface TwilioConfig {
  accountSid: string;
  authToken: string;
  fromPhoneNumber: string;
  maxRetries: number;
  timeoutMs: number;
}

@Injectable()
export class TwilioOTPAdapter implements ISMSService {
  private readonly logger = new Logger(TwilioOTPAdapter.name);
  private readonly twilioClient: Twilio;
  private readonly config: TwilioConfig;

  constructor(private readonly configService: ConfigService) {
    this.config = this.loadConfiguration();
    this.validateConfiguration();
    this.twilioClient = new Twilio(this.config.accountSid, this.config.authToken);
  }

  async sendSMS(request: SendSMSRequest): Promise<Result<SendSMSResponse>> {
    try {
      this.logger.log(`Sending SMS to ${request.phoneNumber}`);

      // Validate input parameters
      const validation = this.validateSMSRequest(request);
      if (validation.isFailure) {
        return Result.fail(validation.error);
      }

      // Format phone number for Twilio
      const formattedPhone = this.formatPhoneNumber(request.phoneNumber);
      
      // Send SMS via Twilio
      const twilioResponse = await this.twilioClient.messages.create({
        body: request.message,
        from: this.config.fromPhoneNumber,
        to: formattedPhone,
        validityPeriod: 600 // 10 minutes
      });

      // Map Twilio response to domain response
      const response: SendSMSResponse = {
        messageId: twilioResponse.sid,
        status: this.mapTwilioStatus(twilioResponse.status),
        deliveredAt: twilioResponse.dateCreated,
        cost: twilioResponse.price ? parseFloat(twilioResponse.price) : 0,
        phoneNumber: request.phoneNumber
      };

      this.logger.log(`SMS sent successfully: ${twilioResponse.sid}`);
      return Result.ok(response);
    } catch (error) {
      this.logger.error(`Failed to send SMS: ${error.message}`, error.stack);
      return Result.fail(this.mapTwilioError(error));
    }
  }

  async getDeliveryStatus(messageId: string): Promise<Result<{ status: string; deliveredAt?: Date }>> {
    try {
      const message = await this.twilioClient.messages(messageId).fetch();
      
      return Result.ok({
        status: this.mapTwilioStatus(message.status),
        deliveredAt: message.dateUpdated
      });
    } catch (error) {
      this.logger.error(`Failed to get delivery status: ${error.message}`);
      return Result.fail(this.mapTwilioError(error));
    }
  }

  async validatePhoneNumber(phoneNumber: string): Promise<Result<{ isValid: boolean; formattedNumber: string }>> {
    try {
      const lookup = await this.twilioClient.lookups.v1.phoneNumbers(phoneNumber).fetch();
      
      return Result.ok({
        isValid: true,
        formattedNumber: lookup.phoneNumber
      });
    } catch (error) {
      if (error.code === 20404) {
        return Result.ok({
          isValid: false,
          formattedNumber: phoneNumber
        });
      }
      
      return Result.fail(this.mapTwilioError(error));
    }
  }

  private loadConfiguration(): TwilioConfig {
    return {
      accountSid: this.configService.get<string>('TWILIO_ACCOUNT_SID'),
      authToken: this.configService.get<string>('TWILIO_AUTH_TOKEN'),
      fromPhoneNumber: this.configService.get<string>('TWILIO_FROM_PHONE'),
      maxRetries: this.configService.get<number>('TWILIO_MAX_RETRIES') || 3,
      timeoutMs: this.configService.get<number>('TWILIO_TIMEOUT_MS') || 10000
    };
  }

  private validateConfiguration(): void {
    if (!this.config.accountSid) {
      throw new Error('Twilio Account SID is required');
    }
    if (!this.config.authToken) {
      throw new Error('Twilio Auth Token is required');
    }
    if (!this.config.fromPhoneNumber) {
      throw new Error('Twilio From Phone Number is required');
    }
  }

  private validateSMSRequest(request: SendSMSRequest): Result<void> {
    if (!request.phoneNumber) {
      return Result.fail(PRESENTATION_ERRORS.FIELD_REQUIRED('phoneNumber'));
    }
    
    if (!request.message) {
      return Result.fail(PRESENTATION_ERRORS.FIELD_REQUIRED('message'));
    }
    
    if (request.message.length > 1600) {
      return Result.fail(PRESENTATION_ERRORS.FIELD_INVALID('message', 'Message too long'));
    }
    
    // Basic phone number validation
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!phoneRegex.test(request.phoneNumber)) {
      return Result.fail(PRESENTATION_ERRORS.TWILIO_INVALID_PHONE);
    }
    
    return Result.ok();
  }

  private formatPhoneNumber(phoneNumber: string): string {
    // Ensure phone number starts with +
    if (!phoneNumber.startsWith('+')) {
      return `+${phoneNumber}`;
    }
    return phoneNumber;
  }

  private mapTwilioStatus(twilioStatus: string): string {
    const statusMap: Record<string, string> = {
      'queued': 'PENDING',
      'sent': 'SENT',
      'received': 'DELIVERED',
      'delivered': 'DELIVERED',
      'undelivered': 'FAILED',
      'failed': 'FAILED'
    };
    
    return statusMap[twilioStatus] || 'UNKNOWN';
  }

  private mapTwilioError(error: any): string {
    if (!error.code) {
      return PRESENTATION_ERRORS.TWILIO_SERVICE_ERROR;
    }
    
    const errorMap: Record<number, string> = {
      20003: PRESENTATION_ERRORS.TWILIO_INVALID_PHONE,
      21211: PRESENTATION_ERRORS.TWILIO_INVALID_PHONE,
      21408: PRESENTATION_ERRORS.PHONE_NUMBER_BLOCKED,
      21610: PRESENTATION_ERRORS.OTP_SEND_LIMIT,
      30001: PRESENTATION_ERRORS.REQUEST_TIMEOUT,
      30002: PRESENTATION_ERRORS.REQUEST_TIMEOUT,
      30003: PRESENTATION_ERRORS.SERVICE_UNAVAILABLE
    };
    
    return errorMap[error.code] || PRESENTATION_ERRORS.TWILIO_SEND_FAILED;
  }
}
```

---

## 🛡️ **MIDDLEWARE - PERFECT TEMPLATES**

### **File Structure (MANDATORY)**:
```
src/presentation/middleware/
├── AuthMiddleware.ts                           # ✅ IMPLEMENT FIRST
├── RBACMiddleware.ts                           # ✅ IMPLEMENT SECOND
├── RateLimitMiddleware.ts                      # ✅ IMPLEMENT THIRD
├── ValidationMiddleware.ts                     # ✅ IMPLEMENT FOURTH
└── index.ts                                    # ✅ Export all middleware
```

### **Universal Middleware Template (COPY-PASTE STRUCTURE)**:
```typescript
// Refs: [SRS_REFERENCE]
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class [MIDDLEWARE_NAME] implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    try {
      // Pre-processing logic
      const validation = this.validateRequest(req);
      if (!validation.isValid) {
        return this.handleValidationError(res, validation.error);
      }

      // Main middleware logic
      const result = this.processRequest(req, res);
      if (!result.success) {
        return this.handleProcessingError(res, result.error);
      }

      // Continue to next middleware
      next();
    } catch (error) {
      this.handleUnexpectedError(res, error);
    }
  }

  private validateRequest(req: Request): { isValid: boolean; error?: string } {
    // Request validation logic
    return { isValid: true };
  }

  private processRequest(req: Request, res: Response): { success: boolean; error?: string } {
    // Main processing logic
    return { success: true };
  }

  private handleValidationError(res: Response, error: string): void {
    res.status(400).json({
      success: false,
      error: error,
      timestamp: new Date().toISOString()
    });
  }

  private handleProcessingError(res: Response, error: string): void {
    res.status(500).json({
      success: false,
      error: error,
      timestamp: new Date().toISOString()
    });
  }

  private handleUnexpectedError(res: Response, error: any): void {
    res.status(500).json({
      success: false,
      error: PRESENTATION_ERRORS.MIDDLEWARE_ERROR,
      timestamp: new Date().toISOString()
    });
  }
}
```

---

## 📝 **VALIDATORS - PERFECT TEMPLATES**

### **File Structure (MANDATORY)**:
```
src/presentation/validators/
├── LoginValidator.ts                           # ✅ IMPLEMENT FIRST
├── CreateUserValidator.ts                      # ✅ IMPLEMENT SECOND
├── VerifyOTPValidator.ts                       # ✅ IMPLEMENT THIRD
├── AssignRoleValidator.ts                      # ✅ IMPLEMENT FOURTH
├── UpdateUserValidator.ts                      # ✅ IMPLEMENT FIFTH
├── RefreshTokenValidator.ts                    # ✅ IMPLEMENT SIXTH
├── LogoutValidator.ts                          # ✅ IMPLEMENT SEVENTH
├── RevokeSessionValidator.ts                   # ✅ IMPLEMENT EIGHTH
└── index.ts                                    # ✅ Export all validators
```

### **Universal Validator Template (COPY-PASTE STRUCTURE)**:
```typescript
// Refs: [SRS_REFERENCE]
import { Injectable } from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class [VALIDATOR_NAME] {
  async validate[EntityName](data: any): Promise<{ isValid: boolean; errors: string[] }> {
    try {
      // Transform plain object to DTO class
      const dto = plainToClass([DTO_CLASS], data);
      
      // Run class-validator validation
      const errors: ValidationError[] = await validate(dto);
      
      if (errors.length > 0) {
        const errorMessages = this.formatValidationErrors(errors);
        return { isValid: false, errors: errorMessages };
      }
      
      // Custom business validation
      const businessValidation = await this.performBusinessValidation(dto);
      if (!businessValidation.isValid) {
        return businessValidation;
      }
      
      return { isValid: true, errors: [] };
    } catch (error) {
      return { 
        isValid: false, 
        errors: [PRESENTATION_ERRORS.VALIDATION_FAILED] 
      };
    }
  }

  private formatValidationErrors(errors: ValidationError[]): string[] {
    const messages: string[] = [];
    
    for (const error of errors) {
      if (error.constraints) {
        messages.push(...Object.values(error.constraints));
      }
    }
    
    return messages;
  }

  private async performBusinessValidation(dto: any): Promise<{ isValid: boolean; errors: string[] }> {
    // Custom business validation logic
    return { isValid: true, errors: [] };
  }
}
```

---

## 🎯 **VARIATION ELIMINATION STRATEGY**

| **Variation Source** | **Standard Template** | **Eliminated %** |
|---------------------|----------------------|------------------|
| Controller patterns | Universal Controller template | 50% → 0% |
| External service integration | Universal External Service template | 30% → 0% |
| Middleware processing | Universal Middleware template | 15% → 0% |
| Error handling patterns | PRESENTATION_ERRORS constants | 5% → 0% |
| **TOTAL ELIMINATION** | **100% → 0%** | **99-100% consistency** |

---

## ✅ **IMPLEMENTATION CHECKLIST (EXACT ORDER)**

### **Week 3 (CRITICAL API FOUNDATION)**:
- [ ] **Day 1**: AuthenticationController.ts với complete auth endpoints (copy exact implementation)
- [ ] **Day 2**: UserController.ts (follow exact templates)
- [ ] **Day 3**: TwilioOTPAdapter.ts với complete SMS integration (copy exact implementation)
- [ ] **Day 4**: EmailOTPAdapter.ts, CRMIntegrationAdapter.ts (follow exact templates)
- [ ] **Day 5**: JWTService.ts và unit tests cho external services

### **Week 4 (COMPLETE PRESENTATION LAYER)**:
- [ ] **Day 6**: OTPController.ts, SessionController.ts (follow exact templates)
- [ ] **Day 7**: AuthMiddleware.ts, RBACMiddleware.ts (follow exact templates)
- [ ] **Day 8**: RateLimitMiddleware.ts, ValidationMiddleware.ts (follow exact templates)
- [ ] **Day 9**: All 8 validators implementation (follow exact templates)
- [ ] **Day 10**: Integration testing và handoff documentation for DEV-8, DEV-9

### **Critical Success Criteria (EXACT VALIDATION)**:
- [ ] `import { AuthenticationController } from './controllers'` → **compiles successfully**
- [ ] `await authController.login(loginDto)` → **returns JWTResponseDto**
- [ ] All error handling uses **PRESENTATION_ERRORS constants exactly**
- [ ] All external services follow **Universal template exactly**
- [ ] All controllers use **NestJS decorators consistently**

---

## 🚫 **ZERO TOLERANCE DEVIATIONS**

### **❌ ABSOLUTELY FORBIDDEN:**
1. **Any variation** in controller endpoint naming from templates
2. **Any different** error messages from PRESENTATION_ERRORS constants
3. **Any alternative** external service method signatures
4. **Any creative** middleware processing beyond standard patterns
5. **Any extra** validation beyond specified templates

### **✅ MANDATORY COMPLIANCE:**
1. **Copy-paste** all error constants exactly
2. **Use exact** NestJS decorator patterns from templates
3. **Follow exact** external service integration patterns
4. **Use exact** parameter names from dictionary
5. **Use exact** import order templates

---

## 💬 **COORDINATION PROTOCOL**

### **You Block (CRITICAL DEPENDENCIES)**:
- **DEV-8**: Needs controllers và external services for integration testing
- **DEV-9**: Needs complete API layer for E2E testing

### **Communication Rules**:
- **API endpoint changes**: FORBIDDEN without tech lead approval
- **External service interface changes**: FORBIDDEN - breaks downstream testing
- **Completion notification**: "✅ DEV-6 presentation layer complete - DEV-8, DEV-9 can start"

---

## 🎯 **FINAL VALIDATION MESSAGE**

When complete, send exact message:
**"✅ All controllers, external services, middleware, and validators ready - DEV-8, DEV-9 can start testing"**

---

**TARGET ACHIEVED: 99-100% code consistency through complete presentation layer template standardization.**

**This specification eliminates ALL variation points while providing robust API infrastructure through strategic controller, external service, and middleware templating.**
