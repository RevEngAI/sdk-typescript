// Verifies `enumUnknownDefaultCase: true` (config.yml) is wired through
// generation: every generated enum gets a sentinel member that consumers can
// fall back to when the server returns a value the client doesn't know about
// (e.g. a new variant added server-side between SDK releases).
//
// Run with: npx tsx tests/enum-unknown-default.test.ts

import { AiDecompilationRating } from '../models/AiDecompilationRating';
import { AiDecompilationTaskStatus } from '../models/AiDecompilationTaskStatus';
import { AnalysisScope } from '../models/AnalysisScope';
import { AppApiRestV2AnalysesEnumsOrderBy } from '../models/AppApiRestV2AnalysesEnumsOrderBy';
import { SandboxTimeout } from '../models/SandboxTimeout';

const STRING_SENTINEL = '11184809';
const NUMERIC_SENTINEL = 11184809;

let failed = 0;
function check(name: string, actual: unknown, expected: unknown): void {
    if (actual === expected) {
        console.log(`  ok - ${name}`);
    } else {
        console.error(`  FAIL - ${name}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
        failed++;
    }
}

console.log('String enums expose UnknownDefaultOpenApi sentinel:');
check('AiDecompilationRating.UnknownDefaultOpenApi', AiDecompilationRating.UnknownDefaultOpenApi, STRING_SENTINEL);
check('AiDecompilationTaskStatus.UnknownDefaultOpenApi', AiDecompilationTaskStatus.UnknownDefaultOpenApi, STRING_SENTINEL);
check('AnalysisScope.UnknownDefaultOpenApi', AnalysisScope.UnknownDefaultOpenApi, STRING_SENTINEL);
check('AppApiRestV2AnalysesEnumsOrderBy.UnknownDefaultOpenApi', AppApiRestV2AnalysesEnumsOrderBy.UnknownDefaultOpenApi, STRING_SENTINEL);

console.log('Numeric enums expose NUMBER_unknown_default_open_api sentinel:');
check('SandboxTimeout.NUMBER_unknown_default_open_api', SandboxTimeout.NUMBER_unknown_default_open_api, NUMERIC_SENTINEL);

console.log('Existing real values are preserved alongside the sentinel:');
check('AnalysisScope.Private', AnalysisScope.Private, 'PRIVATE');
check('AnalysisScope.Public', AnalysisScope.Public, 'PUBLIC');
check('AiDecompilationTaskStatus.Success', AiDecompilationTaskStatus.Success, 'success');
check('SandboxTimeout.NUMBER_120', SandboxTimeout.NUMBER_120, 120);

// Consumer pattern: normalise a raw server value to the enum, falling back to
// the sentinel for anything the SDK wasn't generated against. This is what
// callers should do when switching over an enum value received from the API.
function normalizeAnalysisScope(raw: string): AnalysisScope {
    const known = Object.keys(AnalysisScope).map(k => (AnalysisScope as { [key: string]: string })[k]);
    return known.indexOf(raw) !== -1
        ? (raw as AnalysisScope)
        : AnalysisScope.UnknownDefaultOpenApi;
}

console.log('Consumer fallback maps unknown server values to the sentinel:');
check('known value passes through (PRIVATE)', normalizeAnalysisScope('PRIVATE'), AnalysisScope.Private);
check('known value passes through (PUBLIC)', normalizeAnalysisScope('PUBLIC'), AnalysisScope.Public);
check('unknown value -> sentinel', normalizeAnalysisScope('RESTRICTED'), AnalysisScope.UnknownDefaultOpenApi);
check('empty string -> sentinel', normalizeAnalysisScope(''), AnalysisScope.UnknownDefaultOpenApi);

if (failed > 0) {
    throw new Error(`${failed} assertion(s) failed`);
}
console.log('\nAll assertions passed');
