document.querySelectorAll('.bar').forEach(wrapper => {
    const percent = wrapper.getAttribute('data-percent');
    if (percent) {
        wrapper.style.setProperty('--fill-width', percent + '%');
    }
});