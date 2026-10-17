try {
  const { default: init } = await import("/ccfddl-a53286de05f8a650.js");
  await init({ module_or_path: "/ccfddl-a53286de05f8a650_bg.wasm" });
  if (!document.querySelector('#directory-controls-root .conference-controls')) throw new Error('Directory controls did not mount');
  window.dispatchEvent(new Event('DirectoryControlsReady'));
} catch (error) {
  console.error('Directory controls failed to load', error);
  window.dispatchEvent(new Event('DirectoryControlsFailed'));
}
