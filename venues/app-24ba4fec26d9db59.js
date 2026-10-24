try {
  const { default: init } = await import("/ccfddl-dd7dbb09a1b1e3a2.js");
  await init({ module_or_path: "/ccfddl-dd7dbb09a1b1e3a2_bg.wasm" });
  if (!document.querySelector('#directory-controls-root .conference-controls')) throw new Error('Directory controls did not mount');
  window.dispatchEvent(new Event('DirectoryControlsReady'));
} catch (error) {
  console.error('Directory controls failed to load', error);
  window.dispatchEvent(new Event('DirectoryControlsFailed'));
}
