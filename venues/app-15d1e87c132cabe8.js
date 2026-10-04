try {
  const { default: init } = await import("/ccfddl-f8dc74b5f9cf1cce.js");
  await init({ module_or_path: "/ccfddl-f8dc74b5f9cf1cce_bg.wasm" });
  if (!document.querySelector('#directory-controls-root .conference-controls')) throw new Error('Directory controls did not mount');
  window.dispatchEvent(new Event('DirectoryControlsReady'));
} catch (error) {
  console.error('Directory controls failed to load', error);
  window.dispatchEvent(new Event('DirectoryControlsFailed'));
}
