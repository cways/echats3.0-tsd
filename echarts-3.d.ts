declare interface ECharts {
    group:string|number;
    setOption(option:Object,notMerge?:boolean,notRefreshImmediateLy?:boolean):void;
    getWidth():number;
    getHeight():number;
    getDom():HTMLCanvasElement|HTMLDivElement;
    getOption():Object;
    resize(payload:Object):void;
    dispatchAction(payload:Object):void;
    on(eventName:string,handler:Function,context?:Object):void;
    off(eventName:string,handler?:Function):void;
    showLoading(type?:string,opts?:Object):void;
    hideLoading():void;
    getDateURL(opts:{
        type?:string,
        pixelRatio?:number,
        backgroundColor?:string
    }):string;
    getConnectedDataURL(opts:{
        type?:string,
        pixelRatio?:number,
        backgroundColor?:string
    }):string;
    clear():void;
    isDisposed():boolean;
    dispose():void;
}
declare namespace echarts {
    function init(dom:HTMLDivElement|HTMLCanvasElement,theme?:Object|string,opts?:{
        devicePixelRatio?:number,
        renderer?:string
    }):ECharts;
    function connect(group:string|Array<ECharts>):void;
    function disConnect(group:string):void;
    function dispose(target:ECharts|HTMLDivElement|HTMLCanvasElement):void;
    function getInstanceByDom(target:HTMLDivElement|HTMLCanvasElement):ECharts;
    function registerMap(mapName:string,geoJson:Object,specialAreas?:Object):void;
    function registerTheme(themeName:string,theme:Object):void;
}