import { modifier } from 'ember-modifier';

// The Yasgui import causes issues in node environments because it accesses things that are not available there.
// This originally wasn't an issue because modifier code wouldn't be evaluated in classic builds due to the way the AMD module system works.
// In Embroider optimized builds this is no longer the case. The modifier code is evaluated, even if the modifier doesn't run.
// To work around that issue we override the modifier with a no-op version in FastBoot. Once top-level await is supported we can
// More information: https://github.com/embroider-build/embroider/issues/1809#issuecomment-1955140050
export default modifier(function noOp(/* element, params, hash*/) {});
