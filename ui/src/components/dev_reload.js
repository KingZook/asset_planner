new EventSource("/__maxs_live_reload").onmessage = () => {
    location.reload();
 };