try {
  const { default: init } = await import("/ccfddl-ee0248e584a2cd3b.js");
  await init({ module_or_path: "/ccfddl-ee0248e584a2cd3b_bg.wasm" });
  if (!document.querySelector('#directory-controls-root .conference-controls')) throw new Error('Directory controls did not mount');
  window.dispatchEvent(new Event('DirectoryControlsReady'));
} catch (error) {
  console.error('Directory controls failed to load', error);
  window.dispatchEvent(new Event('DirectoryControlsFailed'));
}
