try {
  const { default: init } = await import("/ccfddl-91cbca26a6f00746.js");
  await init({ module_or_path: "/ccfddl-91cbca26a6f00746_bg.wasm" });
  if (!document.querySelector('#directory-controls-root .conference-controls')) throw new Error('Directory controls did not mount');
  window.dispatchEvent(new Event('DirectoryControlsReady'));
} catch (error) {
  console.error('Directory controls failed to load', error);
  window.dispatchEvent(new Event('DirectoryControlsFailed'));
}
