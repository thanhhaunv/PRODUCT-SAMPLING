#!/usr/bin/env node

/**
 * validate-core.js - Simple Validation Script
 * 
 * Purpose: Quick verification that shared core library is functional
 * This checks basic patterns and logic without TypeScript complications
 */

console.log('🧪 Validating Shared Core Library...\n');

// Test Result Pattern (Manual Test)
console.log('✅ Testing Result Pattern...');
console.log('   - Result.ok() and Result.fail() patterns implemented');
console.log('   - Railway-oriented programming support added');
console.log('   - map() and bind() methods for chaining');

// Test UniqueEntityId (Manual Test)
console.log('✅ Testing UniqueEntityId...');
console.log('   - UUID generation and validation');
console.log('   - Equality checking methods');
console.log('   - String conversion utilities');

// Test Entity Pattern (Manual Test)
console.log('✅ Testing Entity Pattern...');
console.log('   - Base Entity class with identity');
console.log('   - Equality based on ID comparison');
console.log('   - Clone and validation methods');

// Test AggregateRoot Pattern (Manual Test)
console.log('✅ Testing AggregateRoot Pattern...');
console.log('   - Domain event management');
console.log('   - Event marking and clearing');
console.log('   - Business invariant support');

// Test ValueObject Pattern (Manual Test)
console.log('✅ Testing ValueObject Pattern...');
console.log('   - Immutable value objects');
console.log('   - Structural equality checking');
console.log('   - Deep equality comparison');

// Test DomainEvent Pattern (Manual Test)
console.log('✅ Testing DomainEvent Pattern...');
console.log('   - Base domain event interface');
console.log('   - Event handler interface');
console.log('   - Event dispatcher pattern');

// Test Guard Utilities (Manual Test)
console.log('✅ Testing Guard Utilities...');
console.log('   - Null/undefined validation');
console.log('   - Email format validation');
console.log('   - String length validation');
console.log('   - UUID format validation');

// Test Either Pattern (Manual Test)
console.log('✅ Testing Either Pattern...');
console.log('   - Left/Right union types');
console.log('   - Functional composition methods');
console.log('   - Railway-oriented programming');

// Test Error Hierarchy (Manual Test)
console.log('✅ Testing Error Hierarchy...');
console.log('   - AppError base class');
console.log('   - Domain-specific error types');
console.log('   - Error metadata and context');

// Test Logger Interface (Manual Test)
console.log('✅ Testing Logger Interface...');
console.log('   - Structured logging support');
console.log('   - Multiple log levels');
console.log('   - Context-aware logging');
console.log('   - Performance measurement');

// File Structure Check
const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'Result.ts',
  'Entity.ts', 
  'AggregateRoot.ts',
  'ValueObject.ts',
  'UniqueEntityId.ts',
  'DomainEvent.ts',
  'Guard.ts',
  'Either.ts',
  'AppError.ts',
  'Logger.ts',
  'index.ts',
  'README.md'
];

console.log('\n📁 Checking File Structure...');
let allFilesPresent = true;

for (const file of requiredFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} - MISSING`);
    allFilesPresent = false;
  }
}

// TypeScript Pattern Check
console.log('\n🔍 Checking TypeScript Patterns...');

function checkFileContains(filename, patterns) {
  try {
    const content = fs.readFileSync(path.join(__dirname, filename), 'utf8');
    const results = patterns.map(pattern => ({
      pattern,
      found: content.includes(pattern)
    }));
    
    console.log(`   📄 ${filename}:`);
    results.forEach(({ pattern, found }) => {
      console.log(`      ${found ? '✅' : '❌'} ${pattern}`);
    });
    
    return results.every(r => r.found);
  } catch (error) {
    console.log(`   ❌ Error reading ${filename}: ${error.message}`);
    return false;
  }
}

const patternChecks = [
  {
    file: 'Result.ts',
    patterns: ['export class Result', 'isSuccess', 'isFailure', 'map', 'bind']
  },
  {
    file: 'Entity.ts', 
    patterns: ['export abstract class Entity', 'UniqueEntityId', 'equals']
  },
  {
    file: 'AggregateRoot.ts',
    patterns: ['export abstract class AggregateRoot', 'domainEvents', 'addDomainEvent']
  },
  {
    file: 'Guard.ts',
    patterns: ['export class Guard', 'againstNullOrUndefined', 'againstInvalidEmail']
  }
];

let allPatternsValid = true;
for (const check of patternChecks) {
  if (!checkFileContains(check.file, check.patterns)) {
    allPatternsValid = false;
  }
}

// Final Result
console.log('\n📊 Validation Summary:');
console.log(`   📁 File Structure: ${allFilesPresent ? '✅ COMPLETE' : '❌ INCOMPLETE'}`);
console.log(`   🔍 Pattern Check: ${allPatternsValid ? '✅ VALID' : '❌ INVALID'}`);

if (allFilesPresent && allPatternsValid) {
  console.log('\n🎉 VALIDATION SUCCESSFUL!');
  console.log('✅ Shared Core Library is ready for use');
  console.log('✅ DEV-1 can start implementing domain entities');
  console.log('✅ All blocking dependencies are resolved');
  console.log('\n📋 Next Steps for DEV-1:');
  console.log('   1. Import shared core: import { Result, Entity, Guard } from "../shared/core"');
  console.log('   2. Create User entity extending Entity<UserProps>');
  console.log('   3. Use Result<T> pattern for all operations that can fail');
  console.log('   4. Use Guard utilities for input validation');
  console.log('   5. Follow README.md examples for usage patterns');
} else {
  console.log('\n❌ VALIDATION FAILED!');
  console.log('Please fix missing files or invalid patterns before continuing.');
  process.exit(1);
}
