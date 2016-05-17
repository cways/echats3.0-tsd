import {Component,OnInit,ElementRef} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div id="main" style="width: 600px;height:400px;"></div>
    `
})
export class AppComponent implements OnInit{ 
    option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    myEcharts:ECharts;
    constructor(private elementRef:ElementRef){}
    ngOnInit(){
        console.log(this.elementRef.nativeElement.querySelector('#main'));
        this.myEcharts = echarts.init(this.elementRef.nativeElement.querySelector('#main'));
        this.myEcharts.setOption(this.option,true,true);
    }
}
