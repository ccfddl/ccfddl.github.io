try {
  const { default: init } = await import("/ccfddl-c0b978b26e18be4.js");
  await init({ module_or_path: "/ccfddl-c0b978b26e18be4_bg.wasm" });
  if (!document.querySelector('#directory-controls-root .conference-controls')) throw new Error('Directory controls did not mount');
  window.dispatchEvent(new Event('DirectoryControlsReady'));
} catch (error) {
  console.error('Directory controls failed to load', error);
  window.dispatchEvent(new Event('DirectoryControlsFailed'));
}
