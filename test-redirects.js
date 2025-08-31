/**
 * Test Script for Portfolio Redirects
 * 
 * Tests both Next.js middleware redirects and standalone server redirects.
 * Run: node test-redirects.js
 */

const https = require('https');
const http = require('http');

// Test configuration
const TEST_CONFIG = {
  nextjsBase: 'http://localhost:3000', // Your Next.js dev server
  expressBase: 'http://localhost:3001', // Standalone redirect server
  projects: ['stircraft', 'phantastic-beasts', 'slay-the-dagron', 'dream-weaver'],
  patterns: ['/go/', '/app/', '/demo/', '/live/', '/projects/', '/live']
};

// Test helper function
function testRedirect(url, expectedStatus = 302) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, {
      timeout: 5000,
      headers: {
        'User-Agent': 'Portfolio-Redirect-Tester/1.0'
      }
    }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        location: res.headers.location,
        success: res.statusCode === expectedStatus,
        headers: res.headers
      });
    });
    
    req.on('error', (error) => {
      resolve({
        url,
        status: 'ERROR',
        error: error.message,
        success: false
      });
    });
    
    req.on('timeout', () => {
      req.destroy();
      resolve({
        url,
        status: 'TIMEOUT',
        success: false
      });
    });
  });
}

// Test Next.js middleware redirects
async function testNextjsRedirects() {
  console.log('\n🔄 Testing Next.js Middleware Redirects...');
  console.log('=====================================');
  
  const tests = [];
  
  for (const project of TEST_CONFIG.projects) {
    // Test different patterns
    tests.push(testRedirect(`${TEST_CONFIG.nextjsBase}/go/${project}`));
    tests.push(testRedirect(`${TEST_CONFIG.nextjsBase}/app/${project}`));
    tests.push(testRedirect(`${TEST_CONFIG.nextjsBase}/demo/${project}`));
    tests.push(testRedirect(`${TEST_CONFIG.nextjsBase}/live/${project}`));
    tests.push(testRedirect(`${TEST_CONFIG.nextjsBase}/projects/${project}/live`));
  }
  
  const results = await Promise.all(tests);
  
  let passed = 0;
  let failed = 0;
  
  results.forEach(result => {
    const status = result.success ? '✅' : '❌';
    console.log(`${status} ${result.url}`);
    
    if (result.success) {
      console.log(`   → ${result.location}`);
      passed++;
    } else {
      console.log(`   → Status: ${result.status}, Error: ${result.error || 'Unknown'}`);
      failed++;
    }
  });
  
  console.log(`\nNext.js Results: ${passed} passed, ${failed} failed`);
  return { passed, failed, total: results.length };
}

// Test Express server redirects
async function testExpressRedirects() {
  console.log('\n🚀 Testing Express Server Redirects...');
  console.log('=====================================');
  
  // First test if server is running
  const healthCheck = await testRedirect(`${TEST_CONFIG.expressBase}/health`, 200);
  if (!healthCheck.success) {
    console.log('❌ Express server not running at', TEST_CONFIG.expressBase);
    console.log('   Start with: node redirect-server.js');
    return { passed: 0, failed: 1, total: 1 };
  }
  
  console.log('✅ Express server is running');
  
  const tests = [];
  
  for (const project of TEST_CONFIG.projects) {
    tests.push(testRedirect(`${TEST_CONFIG.expressBase}/go/${project}`));
    tests.push(testRedirect(`${TEST_CONFIG.expressBase}/app/${project}`));
    tests.push(testRedirect(`${TEST_CONFIG.expressBase}/demo/${project}`));
    tests.push(testRedirect(`${TEST_CONFIG.expressBase}/live/${project}`));
    tests.push(testRedirect(`${TEST_CONFIG.expressBase}/projects/${project}/live`));
  }
  
  const results = await Promise.all(tests);
  
  let passed = 0;
  let failed = 0;
  
  results.forEach(result => {
    const status = result.success ? '✅' : '❌';
    console.log(`${status} ${result.url}`);
    
    if (result.success) {
      console.log(`   → ${result.location}`);
      passed++;
    } else {
      console.log(`   → Status: ${result.status}, Error: ${result.error || 'Unknown'}`);
      failed++;
    }
  });
  
  console.log(`\nExpress Results: ${passed} passed, ${failed} failed`);
  return { passed, failed, total: results.length };
}

// Test API endpoints
async function testApiEndpoints() {
  console.log('\n📡 Testing API Endpoints...');
  console.log('=============================');
  
  const endpoints = [
    { url: `${TEST_CONFIG.nextjsBase}/api/redirects`, name: 'Next.js API' },
    { url: `${TEST_CONFIG.expressBase}/api/redirects`, name: 'Express API' }
  ];
  
  let passed = 0;
  let failed = 0;
  
  for (const endpoint of endpoints) {
    const result = await testRedirect(endpoint.url, 200);
    const status = result.success ? '✅' : '❌';
    console.log(`${status} ${endpoint.name}: ${endpoint.url}`);
    
    if (result.success) {
      passed++;
    } else {
      failed++;
      console.log(`   → Status: ${result.status}, Error: ${result.error || 'Unknown'}`);
    }
  }
  
  console.log(`\nAPI Results: ${passed} passed, ${failed} failed`);
  return { passed, failed, total: endpoints.length };
}

// Main test runner
async function runAllTests() {
  console.log('🧪 Portfolio Redirect Test Suite');
  console.log('=================================');
  console.log('Testing redirect functionality for Mac McCoy\'s portfolio projects');
  console.log(`Projects: ${TEST_CONFIG.projects.join(', ')}`);
  
  const results = {
    nextjs: await testNextjsRedirects(),
    express: await testExpressRedirects(),
    api: await testApiEndpoints()
  };
  
  // Summary
  console.log('\n📊 Test Summary');
  console.log('===============');
  
  const totalPassed = results.nextjs.passed + results.express.passed + results.api.passed;
  const totalFailed = results.nextjs.failed + results.express.failed + results.api.failed;
  const totalTests = results.nextjs.total + results.express.total + results.api.total;
  
  console.log(`Total Tests: ${totalTests}`);
  console.log(`✅ Passed: ${totalPassed}`);
  console.log(`❌ Failed: ${totalFailed}`);
  console.log(`📈 Success Rate: ${((totalPassed / totalTests) * 100).toFixed(1)}%`);
  
  if (totalFailed === 0) {
    console.log('\n🎉 All tests passed! Your redirect system is working perfectly.');
  } else {
    console.log('\n⚠️  Some tests failed. Check the configuration and server status.');
  }
  
  // Recommendations
  console.log('\n💡 Next Steps:');
  if (results.nextjs.failed === 0) {
    console.log('✅ Next.js middleware is ready for production');
  } else {
    console.log('🔧 Fix Next.js middleware configuration');
  }
  
  if (results.express.failed === 0) {
    console.log('✅ Express server is ready for deployment');
  } else if (results.express.failed === results.express.total) {
    console.log('🚀 Start Express server with: node redirect-server.js');
  } else {
    console.log('🔧 Fix Express server configuration');
  }
  
  console.log('📚 Read REDIRECT-DEPLOYMENT.md for deployment instructions');
}

// Run tests
if (require.main === module) {
  runAllTests().catch(console.error);
}

module.exports = { testRedirect, runAllTests };
