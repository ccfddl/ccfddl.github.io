
export function updateDirectoryFilters(json, english) {
    const state = JSON.parse(json);
    const needle = state.q.trim().toLocaleLowerCase();
    let matches = 0;
    for (const section of document.querySelectorAll('.directory-section')) {
        let count = 0;
        for (const row of section.querySelectorAll('li[data-category]')) {
            const visible = (!state.categories.length || state.categories.includes(row.dataset.category))
                && ['ccf', 'core', 'thcpl'].every(key => !state[key].length || state[key].includes(row.dataset[key]))
                && (!needle || row.dataset.search.toLocaleLowerCase().includes(needle));
            row.hidden = !visible;
            if (visible) { matches++; count++; }
        }
        section.hidden = count === 0;
    }
    const empty = document.getElementById('directory-empty');
    if (empty) {
        empty.hidden = matches !== 0;
        empty.textContent = english ? 'No matching venues.' : '没有匹配的会议。';
    }
    document.querySelectorAll('[data-en][data-zh]').forEach(node => {
        node.textContent = english ? node.dataset.en : node.dataset.zh;
    });
    const query = new URLSearchParams();
    for (const key of ['categories', 'ccf', 'core', 'thcpl']) {
        if (state[key].length) query.set(key, state[key].sort().join(','));
    }
    if (!query.size) query.set('filters', 'all');
    if (state.q) query.set('q', state.q);
    query.set('tz', state.tz);
    history.replaceState(null, '', location.pathname + '?' + query + location.hash);
}
