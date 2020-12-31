export class CircleProgress{
	constructor(id,unchosenBarColor,barColor,fontColor,loop,r){
		this.canvasObj = document.getElementById(id);
		this.ucbc = unchosenBarColor; //未选择进度条颜色
		this.bc = barColor; // 选中的进度条颜色
		this.fc = fontColor; // 字体颜色
		this.loop = loop; // n等分
		this.r = r; //半径
	}
	init(){
		//初始化获得画布的宽高，以及中心点的位置
		this.width = this.canvasObj.offsetWidth;
		this.height = this.canvasObj.offsetHeight;
		this.ctx = this.canvasObj.getContext('2d');
		//中心点
		this.cx = this.width/2;
		this.cy = this.height/2;
		//监听事件
		this.func = (e)=>{
			var x = e.offsetX;
			var y = e.offsetY;
			this.calcAngle(x,y);
		};
		//添加初始化监听函数
		this.canvasObj.addEventListener("mousedown",()=>{
			document.getElementById("myCanvas").addEventListener("mousemove",this.func);
		});
		this.canvasObj.addEventListener("mouseup",function(){
			document.getElementById("myCanvas").removeEventListener("mousemove",this.func);
		});
	}
	drawBase(){
		this.ctx.strokeStyle = this.ucbc;
		this.ctx.lineWidth = 2;
		for(var i = 0; i < this.loop; i++){
			this.ctx.beginPath();
			this.ctx.moveTo(this.x,this.y);
    		this.ctx.lineTo(this.x+Math.sin(2*Math.PI/this.loop*i)*this.r, this.y+Math.cos(2*Math.PI/this.loop*i)*this.r);
    		this.ctx.stroke();
    		this.ctx.closePath()
		}
		this.ctx.beginPath();
		this.ctx.arc(this.x,this.y,0.7*this.r,0,2*Math.PI);
		this.ctx.fillStyle="#fff";
		this.ctx.fill();
		this.ctx.strokeStyle="#fff"
		this.ctx.beginPath();
		this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
		this.ctx.stroke();
	}
	drawPer(num){
		num = num || 0;
		ctx.strokeStyle = this.bc;
		ctx.lineWidth = 2;
		for(var i = 0; i < num; i++){
			this.ctx.beginPath();
			this.ctx.moveTo(this.x,this.y);
    		this.ctx.lineTo(this.x+Math.sin(2*Math.PI/this.loop*i)*this.r, this.y+Math.cos(2*Math.PI/this.loop*i)*this.r);
    		this.ctx.stroke();
		}	
		this.ctx.beginPath();
		this.ctx.arc(this.x,this.y,0.7*this.r,0,2*Math.PI);
		this.ctx.fillStyle="#fff";
		this.ctx.fill();
		this.ctx.strokeStyle=this.fc;
		this.ctx.font="30px Arial";
		this.ctx.textBaseline = 'middle'; //设置文本的垂直对齐方式
	    this.ctx.textAlign = 'center';//设置文本的水平对齐方式
		this.ctx.strokeText(num,this.x,this.y);
		this.ctx.strokeStyle="#fff"
		this.ctx.beginPath();
		this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
		this.ctx.stroke();
	}
	calcAngle(x1,y1){
		var dx = (x1 - this.cx);
		var dy = (y1 - this.cy);
		var numTemp = 0;
		var perangle = 360 / this.loop;
		// var angle = Math.abs(Math.atan(dx/dy));
		var angle = Math.abs(Math.atan(dx/dy));

		angle = angle * 180 / Math.PI;
		//区分为四个区域 1. x > 0; y > 0; 2. x > 0; y < 0; 3. x < 0; y > 0; 4. x < 0; y < 0;
		if(dx > 0 && dy > 0){
			// + 0
			numTemp = Math.ceil((angle + 0)/perangle);
		}else if( dx > 0 && dy < 0){
			// + 90
			numTemp = Math.ceil(( 90 - angle + 90)/perangle);
		}else if( dx < 0 && dy > 0){
			// + 270
			numTemp = Math.ceil((90 - angle + 270)/perangle);
		}else{
			// + 180
			numTemp = Math.ceil((angle + 180)/perangle);
		}
		//先清除画布
		ctx.clearRect(0,0,this.width,this.height);
		this.drawBase();
		this.drawPer(numTemp);
		return;
	}
}
