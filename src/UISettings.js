/**
 * UI 组件的基础配置
 *
 * @class
 * @memberof TIny.ui
 */
class UISettings {
  constructor() {
    this.width = 0;
    this.height = 0;
    this.active = {};
    this.textStyle = {};
    this.roundRectBase64_black75 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMzAyZGY2ZS02Y2FmLTQ5YTUtYTVkNS1jM2Q3ZTY1ZGY2YjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzQwQzQ1MDRDMDRGMTFFN0FFOEE4Qzg3QzREMDc2RjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzQwQzQ1MDNDMDRGMTFFN0FFOEE4Qzg3QzREMDc2RjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTMwMmRmNmUtNmNhZi00OWE1LWE1ZDUtYzNkN2U2NWRmNmI1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEzMDJkZjZlLTZjYWYtNDlhNS1hNWQ1LWMzZDdlNjVkZjZiNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PobBPigAAAEFSURBVHjarJXNCgFRGIaP42+j/GysEW6AcBH2UrgyK3EFlNzBhLLAEvlZ2GCPeD99o6HxO99bT02n09M08533uJR9PCDDJEEYnMAOLEAfDHntIS4bWRaUQVS9zxa0WH6P2/KsQQnUQEB9Du0pAB+YgsuzkGRF9XvSwAvGVmEOVNX/IekabDT/gIpyHnJ4NL9dREBIjrzm0ZBKhoQJQWGchEFBYYiEZ0HhbZj3gr4DCZeCwhkJB4LCAQkNbhGnIYehuYIaAkJyHM2zvAF+kPpT1gbd57aZcCX9Oug90LSrL1oYgRWIfdGJVLB10DFlrxrbvAJy3N4xS3nQh59zSxt2V8BVgAEA0AAwNCQbWm0AAAAASUVORK5CYII=';
    this.roundRectBase64_white = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhBMkZEMEVCQkUxODExRTdBQ0IzRDUwNDhFRTNGQTg4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhBMkZEMEVDQkUxODExRTdBQ0IzRDUwNDhFRTNGQTg4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEEyRkQwRTlCRTE4MTFFN0FDQjNENTA0OEVFM0ZBODgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEEyRkQwRUFCRTE4MTFFN0FDQjNENTA0OEVFM0ZBODgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5j8e8ZAAAA4UlEQVR42qyUXQqCQBRG1cD2UEFQq2gXVtaLq6hd6GstI6j2EQS9RlhQuIXyZfouXGH8K3TuB2cYh7kHZcZrK6WsirjAYyagB1LwBGewB0dey4eEBabgqv6H9syK9fpDB4SqeUKuLQnbyHRpTugr85DDsjHQAdzAwDLLC4wcDAsBGaUPlg5fDal49Ml3TIZCwgcJ35h0hYSpU3nbDULCRNCXkPAiKDyR8CAoPEhf7HF2KGuBt1uBj94cIoP/OKprX5sWsm1d+8qYN2iw/q8Gq+OCAOxADFIm5rWA95RqvwIMAKI2aIgZcds+AAAAAElFTkSuQmCC';
    this.blankBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM3RDMwODAzQUM4RTExRTc4MDNEQTZGQ0E2MjgxNEFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM3RDMwODA0QUM4RTExRTc4MDNEQTZGQ0E2MjgxNEFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzdEMzA4MDFBQzhFMTFFNzgwM0RBNkZDQTYyODE0QUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzdEMzA4MDJBQzhFMTFFNzgwM0RBNkZDQTYyODE0QUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Iqam2AAAAEElEQVR42mL4//8/A0CAAQAI/AL+26JNFgAAAABJRU5ErkJggg==';
  }
}

export default UISettings;
