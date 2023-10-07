// Garden Gnome Software - Skin
// Pano2VR 6.0.6/17336
// Filename: using-tags.ggsk
// Generated 2020-10-09T10:34:27

function pano2vrSkin(player,base) {
	player.addVariable('vis_thumbnail_menu', 2, true);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('vis_loc_text', 2, true);
	player.addVariable('opt_hotspot_preview', 2, true);
	player.addVariable('vis_loader', 2, true);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_info_popup_3', 2, false);
	player.addVariable('mobile_map_move', 2, true);
	player.addVariable('ht_ani', 2, false);
	player.addVariable('ImageText', 0, "");
	player.addVariable('ImageHTML', 0, "");
	player.addVariable('OpenState', 2, true);
	player.addVariable('GotoMap', 2, false);
	player.addVariable('end', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__14=document.createElement('div');
		el.ggId="\u79fb\u52a8\u7aef\u7528\u6237\u754c\u9762";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__14.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__14.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__14.style[domTransition]='';
				if (me.__14.ggCurrentLogicStateVisible == 0) {
					me.__14.style.visibility="hidden";
					me.__14.ggVisible=false;
				}
				else if (me.__14.ggCurrentLogicStateVisible == 1) {
					me.__14.style.visibility=(Number(me.__14.style.opacity)>0||!me.__14.style.opacity)?'inherit':'hidden';
					me.__14.ggVisible=true;
				}
				else {
					me.__14.style.visibility="hidden";
					me.__14.ggVisible=false;
				}
			}
		}
		me.__14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._ui_mobile=document.createElement('div');
		el.ggId="UI\u4ea4\u4e92_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ui_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ui_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		el.ggId="\u5e95\u90e8\u5bfc\u822a";
		el.ggDx=0;
		el.ggDy=100;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._bg_bottom0=document.createElement('div');
		el.ggId="bg_bottom";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,71,66,0.882353);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0%;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bg_bottom0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg_bottom0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._image_right0=document.createElement('div');
		els=me._image_right0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQyOTMzNzY1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwMzMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI5LjIxNiAwIDAgMjI5LjIxNiAwIDUxMmMwIDI4Mi43NjggMjI5LjIxNiA1MTIgNTEyIDUxMiAyODIuNzUyIDAgNTEyLTIyOS4yMzIgNTEyLTUxMkMxMDI0IDIyOS4yMTYgNzk0Ljc1MiAwIDUxMiAwek01MTIgOTkyQzI0Ni44OTYgOTkyIDMyIDc3Ny4wODggMzIgNTEyIDMyIDI0Ni44OTYgMjQ2Ljg5NiAzMiA1MTIgMzJjMjY1LjA1NiAwIDQ4MCAyMTQuODk2IDQ4MCA0ODBDOTkyIDc3Ny4wODggNzc3LjA1NiA5OTIgNTEyIDk5MnoiIHAtaWQ9IjIwMzQiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJN'+
			'NDMwLjg4IDI1MS42MzJjLTYuMjU2LTYuMjU2LTE2LjM2OC02LjI1Ni0yMi42MjQgMHMtNi4yNTYgMTYuMzg0IDAgMjIuNjI0TDY0NiA1MTJsLTIzNy43NDQgMjM3Ljc2Yy02LjI1NiA2LjI1Ni02LjI1NiAxNi4zNjggMCAyMi42MjRzMTYuMzY4IDYuMjU2IDIyLjYyNCAwbDI0OC45MTItMjQ4LjkxMmMzLjE2OC0zLjE1MiA0LjcwNC03LjMyOCA0LjY1Ni0xMS40NTYgMC4wNDgtNC4xNDQtMS40ODgtOC4zMDQtNC42NTYtMTEuNDcyTDQzMC44OCAyNTEuNjMyeiIgcC1pZD0iMjAzNSIgZmlsbD0iI2YzZDViOSI+PC9wYXRoPjwvc3ZnPg==';
		me._image_right0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;image_right0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image right";
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 5%;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_right0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_right0.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._image_right0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_112=document.createElement('div');
		els=me._text_112__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #f8dbbd;';
		hs+='color: rgba(248,219,189,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u4e0b\u4e00\u6b65<br\/>";
		el.appendChild(els);
		me._text_112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_112.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._image_right0.appendChild(me._text_112);
		me._bg_bottom0.appendChild(me._image_right0);
		el=me._image_left0=document.createElement('div');
		els=me._image_left0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5ODI0NjMxODAyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4MzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI5LjIxNiAwIDAgMjI5LjIxNiAwIDUxMmMwIDI4Mi43NjggMjI5LjIxNiA1MTIgNTEyIDUxMiAyODIuNzUyIDAgNTEyLTIyOS4yMzIgNTEyLTUxMkMxMDI0IDIyOS4yMTYgNzk0Ljc1MiAwIDUxMiAwek01MTIgOTkyQzI0Ni44OTYgOTkyIDMyIDc3Ny4wODggMzIgNTEyIDMyIDI0Ni44OTYgMjQ2Ljg5NiAzMiA1MTIgMzJjMjY1LjA1NiAwIDQ4MCAyMTQuODk2IDQ4MCA0ODBDOTkyIDc3Ny4wODggNzc3LjA1NiA5OTIgNTEyIDk5MnoiIHAtaWQ9IjE4MzEiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJN'+
			'NTkzLjEyIDc3Mi4zNjhjNi4yNTYgNi4yNTYgMTYuMzY4IDYuMjU2IDIyLjYyNCAwczYuMjU2LTE2LjM2OCAwLTIyLjYyNEwzNzggNTEyLjAxNmwyMzcuNzQ0LTIzNy43NmM2LjI1Ni02LjI1NiA2LjI1Ni0xNi4zNjggMC0yMi42MjRzLTE2LjM2OC02LjI1Ni0yMi42MjQgMEwzNDQuMjI0IDUwMC41NDRjLTMuMTY4IDMuMTUyLTQuNzA0IDcuMzI4LTQuNjU2IDExLjQ1Ni0wLjA0OCA0LjE0NCAxLjQ4OCA4LjMwNCA0LjY1NiAxMS40NzJMNTkzLjEyIDc3Mi4zNjh6IiBwLWlkPSIxODMyIiBmaWxsPSIjZjNkNWI5Ij48L3BhdGg+PC9zdmc+';
		me._image_left0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;image_left0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image left";
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_left0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_left0.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._image_left0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_111=document.createElement('div');
		els=me._text_111__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #f8dbbd;';
		hs+='color: rgba(248,219,189,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u4e0a\u4e00\u6b65";
		el.appendChild(els);
		me._text_111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_111.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._image_left0.appendChild(me._text_111);
		me._bg_bottom0.appendChild(me._image_left0);
		el=me._image_list2=document.createElement('div');
		els=me._image_list2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQyNzU0OTMxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUxNTciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzQ3LjQyODU3MSAyNzQuMjg1NzE0YTE4LjI4NTcxNCAxOC4yODU3MTQgMCAxIDEgMC0zNi41NzE0MjhoNDc1LjQyODU3MmExOC4yODU3MTQgMTguMjg1NzE0IDAgMSAxIDAgMzYuNTcxNDI4aC00NzUuNDI4NTcyeiBtLTE0Ni4yODU3MTQgMGExOC4yODU3MTQgMTguMjg1NzE0IDAgMSAxIDAtMzYuNTcxNDI4aDM2LjU3MTQyOWExOC4yODU3MTQgMTguMjg1NzE0IDAgMCAxIDAgMzYuNTcxNDI4aC0zNi41NzE0Mjl6IG0xNDYuMjg1NzE0IDI1NmExOC4yODU3MTQgMTguMjg1NzE0IDAgMSAxIDAtMzYuNTcxNDI4aDQ3NS40Mjg1'+
			'NzJhMTguMjg1NzE0IDE4LjI4NTcxNCAwIDEgMSAwIDM2LjU3MTQyOGgtNDc1LjQyODU3MnogbS0xNDYuMjg1NzE0IDBhMTguMjg1NzE0IDE4LjI4NTcxNCAwIDEgMSAwLTM2LjU3MTQyOGgzNi41NzE0MjlhMTguMjg1NzE0IDE4LjI4NTcxNCAwIDEgMSAwIDM2LjU3MTQyOGgtMzYuNTcxNDI5eiBtMTQ2LjI4NTcxNCAyNTZhMTguMjg1NzE0IDE4LjI4NTcxNCAwIDEgMSAwLTM2LjU3MTQyOGg0NzUuNDI4NTcyYTE4LjI4NTcxNCAxOC4yODU3MTQgMCAxIDEgMCAzNi41NzE0MjhoLTQ3NS40Mjg1NzJ6IG0tMTQ2LjI4NTcxNCAwYTE4LjI4NTcxNCAxOC4yODU3MTQgMCAxIDEgMC0zNi41NzE0MjhoMz'+
			'YuNTcxNDI5YTE4LjI4NTcxNCAxOC4yODU3MTQgMCAxIDEgMCAzNi41NzE0MjhoLTM2LjU3MTQyOXoiIHAtaWQ9IjUxNTgiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48L3N2Zz4=';
		me._image_list2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;image_list2;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image list";
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 25%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_list2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_list2.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._image_list2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_110=document.createElement('div');
		els=me._text_110__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 100%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #f8dbbd;';
		hs+='color: rgba(248,219,189,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u4f5c\u54c1\u5217\u8868<br\/>";
		el.appendChild(els);
		me._text_110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_110.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._image_list2.appendChild(me._text_110);
		me._bg_bottom0.appendChild(me._image_list2);
		el=me._image_list1=document.createElement('div');
		els=me._image_list1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQyOTA4OTA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0NTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI5LjIxNiAwIDAgMjI5LjIxNiAwIDUxMmMwIDI4Mi43NjggMjI5LjIxNiA1MTIgNTEyIDUxMiAyODIuNzUyIDAgNTEyLTIyOS4yMzIgNTEyLTUxMkMxMDI0IDIyOS4yMTYgNzk0Ljc1MiAwIDUxMiAwek01MTIgOTkyQzI0Ni44OTYgOTkyIDMyIDc3Ny4wODggMzIgNTEyIDMyIDI0Ni44OTYgMjQ2Ljg5NiAzMiA1MTIgMzJjMjY1LjA1NiAwIDQ4MCAyMTQuODk2IDQ4MCA0ODBDOTkyIDc3Ny4wODggNzc3LjA1NiA5OTIgNTEyIDk5MnoiIHAtaWQ9IjE0NTIiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJN'+
			'ODIxLjE1MiA1MTguMTEyYzAuNDMyLTEuMDA4IDAuODMyLTEuOTg0IDEuMDI0LTMuMDU2IDAuMjI0LTEuMDcyIDAuMjQtMi4wOTYgMC4yMjQtMy4xNTIgMC0wLjk2LTAuMDE2LTEuODcyLTAuMTkyLTIuODE2LTAuMjI0LTEuMi0wLjY1Ni0yLjI3Mi0xLjEzNi0zLjM5Mi0wLjI0LTAuNTQ0LTAuMjU2LTEuMTM2LTAuNTYtMS42NjQtMC4xNi0wLjI1Ni0wLjQtMC40LTAuNTYtMC42NC0wLjY1Ni0wLjk5Mi0xLjQ4OC0xLjgyNC0yLjMzNi0yLjY3Mi0wLjcwNC0wLjY3Mi0xLjM0NC0xLjM0NC0yLjEyOC0xLjg3Mi0wLjMyLTAuMjA4LTAuNDgtMC41MjgtMC44MTYtMC43MDRsLTQ1Ny4yNjQtMjY0Yy0wLj'+
			'I4OC0wLjE2LTAuNjA4LTAuMTYtMC44OTYtMC4zMDQtMC45NzYtMC40OC0yLTAuNzM2LTMuMDU2LTEuMDI0LTEuMDQtMC4yNzItMi4wMzItMC41Ni0zLjA4OC0wLjYyNC0wLjMzNi0wLjAxNi0wLjYwOC0wLjE5Mi0wLjk2LTAuMTkyLTAuNjg4IDAtMS4yOTYgMC4zMi0xLjk2OCAwLjQtMS4xMDQgMC4xMjgtMi4xNDQgMC4yODgtMy4xODQgMC42NC0wLjk5MiAwLjMzNi0xLjg0IDAuODE2LTIuNzM2IDEuMzI4LTAuODggMC40OTYtMS43MTIgMC45OTItMi40OTYgMS42OC0wLjg0OCAwLjcyLTEuNDg4IDEuNTY4LTIuMTYgMi40NDgtMC40IDAuNTI4LTAuOTc2IDAuODk2LTEuMzI4IDEuNDg4LTAuMTc2'+
			'IDAuMzA0LTAuMTYgMC42MjQtMC4zMiAwLjkyOC0wLjQ2NCAwLjk0NC0wLjcyIDEuOTY4LTEuMDA4IDMuMDA4LTAuMjg4IDEuMDU2LTAuNTc2IDIuMDY0LTAuNjQgMy4xMzYtMC4wMTYgMC4zMzYtMC4xOTIgMC42MDgtMC4xOTIgMC45NDRsMCA1MjguMDMyYzAgMC4zMzYgMC4xNzYgMC42MDggMC4xOTIgMC45MjggMC4wNjQgMS4wNzIgMC4zNTIgMi4xMTIgMC42NCAzLjE2OCAwLjI4OCAxLjA0IDAuNTI4IDIuMDQ4IDAuOTkyIDIuOTkyIDAuMTYgMC4zMDQgMC4xNDQgMC42MjQgMC4zMiAwLjkyOCAwLjMzNiAwLjU5MiAwLjkxMiAwLjk2IDEuMzI4IDEuNTA0IDAuNjcyIDAuODggMS4zMjggMS43MT'+
			'IgMi4xNiAyLjQ0OCAwLjc4NCAwLjY3MiAxLjYzMiAxLjE4NCAyLjUyOCAxLjY4IDAuODggMC41MTIgMS43MTIgMC45OTIgMi42ODggMS4zMTIgMS4wNzIgMC4zNjggMi4xNDQgMC41MjggMy4yNjQgMC42NTYgMC42NTYgMC4wOTYgMS4yMzIgMC4zODQgMS45MDQgMC4zODQgMC4zMzYgMCAwLjYwOC0wLjE3NiAwLjkyOC0wLjE5MiAxLjA3Mi0wLjA2NCAyLjA5Ni0wLjM1MiAzLjE2OC0wLjY0IDEuMDQtMC4yODggMi4wNDgtMC41MjggMi45OTItMC45OTIgMC4zMDQtMC4xNiAwLjY0LTAuMTQ0IDAuOTI4LTAuMzJsNDU3LjI0OC0yNjRjMC4zMi0wLjE5MiAwLjQ4LTAuNDggMC43ODQtMC42ODggMC44'+
			'NDgtMC41NiAxLjU1Mi0xLjI4IDIuMjg4LTIuMDE2IDAuOC0wLjc4NCAxLjU4NC0xLjU1MiAyLjE3Ni0yLjQ2NCAwLjE5Mi0wLjI3MiAwLjQ2NC0wLjQxNiAwLjY0LTAuNzJDODIwLjg4IDUxOS4zOTIgODIwLjkxMiA1MTguNzIgODIxLjE1MiA1MTguMTEyek0zNjUuNDA4IDI3NS42OTYgNzc0LjY3MiA1MTIgMzY1LjQwOCA3NDguMzA0IDM2NS40MDggMjc1LjY5NnoiIHAtaWQ9IjE0NTMiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48L3N2Zz4=';
		me._image_list1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;image_list1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image list";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_list1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_list1.onclick=function (e) {
			player.startAutorotate("0.25");
			player.setVariableValue('GotoMap', true);
		}
		me._image_list1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_19=document.createElement('div');
		els=me._text_19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #f8dbbd;';
		hs+='color: rgba(248,219,189,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u81ea\u52a8\u64ad\u653e<br\/>";
		el.appendChild(els);
		me._text_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_19.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._image_list1.appendChild(me._text_19);
		me._bg_bottom0.appendChild(me._image_list1);
		el=me._image_30=document.createElement('div');
		els=me._image_30__img=document.createElement('img');
		els.className='ggskin ggskin_image_30';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAADvElEQVRIibWWv4/mUxTGP89zvxqFKVVKySZ0JERBJqbZVdklTIZEViQiUfob6BQKtGKRUK3Ez5XMZDWK0dFoGLQiGI2d9yjuuT/eN+/ofJOZ7/3ee+495zznOc99dfzRW/wPT2yZWwHXFkkAnwNGXCH44/wzdL4LneNmPIY4sCwkLGtP6FNJOxLIqn9qb09jxjhtTM7VeUmqrzFGsi0J25clfW3rIVmfyd6xhBC2cB5u1znJfd4yssDuNlbaegSJ+xlG8p+WL0q6aelBS19I3nEeonZADQ6XzERGJh24Op8RaWu53xaLXKGI4C/QRcQnEA8LfRXEHvh3RRC11kGAhAgRiiz9KHGg+t3+Zdkja2zbAyL7tMiXinwk6T7LN4p0p116pKUM+zLN20KlZl'+
			'rfCWlCWSSKzVLsJJca204JXRJcBx4FjhFXhL5pLLTUI06W12RiPTNTM54NFxWhtrvtCv0N8RjwHuKygqOQXhYQFVKiHx4M6DquGUMMhzmjH268WwPIZZQGAaAC8TbieWLUg/YRedwU79aWnPYuthn2DQRlZJxBvCD4LeCVcVjzrBp1RBuO7PpYyMm26rCAAsdwGkS4703WDYC+ZwKhBfBfQjMHuRTXbFrtI11owqpTGn2HeLrZefIQSZL+3ZxFIprVWlxmszXq9PxGJutqup5h70AagJvKG2QNp7y36/PskTWbe4EPCO6p1G3r3UBrOLcMW9rnPltSzM8PgQvb9m+rqZhZOm1QbCaz7mlqwQtTTC9JvNk2VtHLsUYtl+Lk8xpptie4OZf+b0WwMvEG0q8Q14cHaFCHawB2KV0DbVPyLXd9pbjdEm2+zqXtaSm+6lIs'+
			'6327PKBi7IJLwaXuK3leJc2aZm2AThCh0Wkei9lbtwmuBdxleJXgY4j7kU6iMbcJA8q2iACZNfb0QtYGa/05IBWuQd5e7eI1pLuJuBrSlwr2kH5uRK2xB4vtSAVRoKH4m53cIm1LATgPy1pF8CLSHRZPBBwKHgF+GQ7F4iRNdJAmekzir+60emiy7Sb6VYn/AfZrLvEkcCS0G3BCgrhYmm6UVqkqyE3kJ7J1i+iWk5hXdt4S7AdaETyFdChiV/ATwKKUNsWcR9QfRdF/TzBuBY1qZkSjDL37ziQOCFYo9gkfCnZD/LhIGfOQo6Gf0lrmaCiVqL3VxVkkm9siZyGeBZ0hnhG8Djy+WFqRvxo2KAKRqjhdR+4sz7CcoI7kB7HQGcRzoG8hjgG0Orn5DnBAXpMbz9wH24V963P+7fgvJLBgxd3IVlAAAAAASUVORK5CYI'+
			'I=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDy=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 25%;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_30.onclick=function (e) {
			player.setVariableValue('OpenState', true);
			if (player.transitionsDisabled) {
				me.__19.style[domTransition]='none';
			} else {
				me.__19.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me.__19.ggParameter.rx=0;me.__19.ggParameter.ry=100;
			me.__19.style[domTransform]=parameterToTransform(me.__19.ggParameter);
		}
		me._image_30.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_18=document.createElement('div');
		els=me._text_18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 120%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #f8dbbd;';
		hs+='color: rgba(248,219,189,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u6536\u8d77\u5bfc\u822a<br\/><br\/>";
		el.appendChild(els);
		me._text_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_18.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._image_30.appendChild(me._text_18);
		me._bg_bottom0.appendChild(me._image_30);
		el=me._image_list_0=document.createElement('div');
		els=me._image_list_0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQyOTg4MjMzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyMDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI5LjIxNiAwIDAgMjI5LjIxNiAwIDUxMmMwIDI4Mi43NjggMjI5LjIxNiA1MTIgNTEyIDUxMiAyODIuNzUyIDAgNTEyLTIyOS4yMzIgNTEyLTUxMkMxMDI0IDIyOS4yMTYgNzk0Ljc1MiAwIDUxMiAwek01MTIgOTkyQzI0Ni44OTYgOTkyIDMyIDc3Ny4wODggMzIgNTEyIDMyIDI0Ni44OTYgMjQ2Ljg5NiAzMiA1MTIgMzJjMjY1LjA1NiAwIDQ4MCAyMTQuODk2IDQ4MCA0ODBDOTkyIDc3Ny4wODggNzc3LjA1NiA5OTIgNTEyIDk5MnoiIHAtaWQ9IjMyMDEiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJN'+
			'MzcxLjAwOCAzMjBjLTguODQ4IDAtMTYgNy4xNjgtMTYgMTZsMCAzNTJjMCA4Ljg0OCA3LjE1MiAxNiAxNiAxNnMxNi03LjE1MiAxNi0xNkwzODcuMDA4IDMzNkMzODcuMDA4IDMyNy4xNjggMzc5Ljg0IDMyMCAzNzEuMDA4IDMyMHoiIHAtaWQ9IjMyMDIiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJNNjUyLjk5MiAzMjBjLTguODQ4IDAtMTYgNy4xNjgtMTYgMTZsMCAzNTJjMCA4Ljg0OCA3LjE1MiAxNiAxNiAxNnMxNi03LjE1MiAxNi0xNkw2NjguOTkyIDMzNkM2NjguOTkyIDMyNy4xNjggNjYxLjg0IDMyMCA2NTIuOTkyIDMyMHoiIHAtaWQ9IjMyMDMiIGZpbGw9IiNmM2Q1YjkiPj'+
			'wvcGF0aD48L3N2Zz4=';
		me._image_list_0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;image_list_0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image list ";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_list_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_list_0.onclick=function (e) {
			player.setVariableValue('GotoMap', false);
			player.stopAutorotate();
		}
		me._image_list_0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_17=document.createElement('div');
		els=me._text_17__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #f8dbbd;';
		hs+='color: rgba(248,219,189,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u505c\u6b62\u64ad\u653e<br\/><br\/>";
		el.appendChild(els);
		me._text_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_17.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._image_list_0.appendChild(me._text_17);
		me._bg_bottom0.appendChild(me._image_list_0);
		me.__19.appendChild(me._bg_bottom0);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,71,66,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 70%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_thumbnail_menu') == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getVariableValue('vis_thumbnail_menu') == true)
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_3.style[domTransition]='opacity 0s, visibility 0s';
				if (me._rectangle_3.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_3.style.visibility=me._rectangle_3.ggVisible?'inherit':'hidden';
					me._rectangle_3.style.opacity=1;
				}
				else if (me._rectangle_3.ggCurrentLogicStateAlpha == 1) {
					me._rectangle_3.style.visibility="hidden";
					me._rectangle_3.style.opacity=0;
				}
				else {
					me._rectangle_3.style.visibility=me._rectangle_3.ggVisible?'inherit':'hidden';
					me._rectangle_3.style.opacity=1;
				}
			}
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea_1';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 93.5px;';
		hs+='left : 50%;';
		hs+='margin-left : -251.5px;';
		hs+='margin-top : -46.75px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 503px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			me._scrollarea_1__content.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			me._scrollarea_1__content.style.left = -(Math.round(me._scrollarea_1.ggScrollPosX / me._scrollarea_1.ggHPercentVisible)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			me._scrollarea_1__content.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			me._scrollarea_1__content.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.offsetWidth - (me._scrollarea_1.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.offsetWidth - (me._scrollarea_1.ggVertScrollVisible ? 15 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.offsetHeight - (me._scrollarea_1.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.offsetHeight - (me._scrollarea_1.ggHorScrollVisible ? 15 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t[0].clientX;
			me._scrollarea_1.ggDragLastY = t[0].clientY;
			me._scrollarea_1__content.ontouchend = function() {
				me._scrollarea_1__content.ontouchend = null;
				me._scrollarea_1__content.ontouchmove = null;
			}
			me._scrollarea_1__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._scrollarea_1.ggDragLastX;
				var diffY = t[0].clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragLastX = t[0].clientX;
				me._scrollarea_1.ggDragLastY = t[0].clientY;
				me._scrollarea_1.ggScrollByX(-diffX);
				me._scrollarea_1.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._scrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 378px; background-color: rgba(248,219,189,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 378px; background-color: rgba(80,71,66,0.705882); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1.ggScrollPosY = 0;
		me._scrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragLastY = e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffY = t[0].clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragLastY = t[0].clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,0);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 90%;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var containerWidth = offsetWidthWithScale;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = (contentWidth/-2) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.offsetHeight;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = (contentHeight/-2) + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggVertScrollVisible = true;
				if(me._scrollarea_1.ggVertScrollVisible) {
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.offsetHeight - 15;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height - me._scrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.offsetHeight;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height;
						me._scrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1__vertScrollBg.style.height = me._scrollarea_1.ggAvailableHeight + 'px';
					me._scrollarea_1.ggVPercentVisible = me._scrollarea_1.ggAvailableHeightWithScale / contentHeight;
					if (me._scrollarea_1.ggVPercentVisible > 1.0) me._scrollarea_1.ggVPercentVisible = 1.0;
					me._scrollarea_1.ggScrollHeight =  Math.round(me._scrollarea_1__vertScrollBg.offsetHeight * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1__vertScrollFg.style.height = me._scrollarea_1.ggScrollHeight + 'px';
					me._scrollarea_1.ggScrollPosY = me._scrollarea_1.ggScrollPosYPercent * me._scrollarea_1.ggAvailableHeight;
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
					me._scrollarea_1__content.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				} else {
					me._scrollarea_1.ggScrollPosY = 0;
					me._scrollarea_1.ggScrollPosYPercent = 0.0;
					me._scrollarea_1__cornerBg.style.visibility = 'hidden';
				}
			}
		}
		el=me._cloner_1=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 504;
		el.ggHeight = 94.5;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		el.ggUpdate = function(filter) {
			if(me._cloner_1.ggUpdating == true) return;
			me._cloner_1.ggUpdating = true;
			var el=me._cloner_1;
			el.ggInstances = [];
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			el.ggCurrentFilter = filter;
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var numCols = me._cloner_1.ggNumRepeat;
			if (numCols < 1) numCols = 1;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._cloner_1.ggHeight) + 'px';
				parameter.left=(column * me._cloner_1.ggWidth) + 'px';
				var inst = new SkinCloner_cloner_1_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= numCols) {
					column = 0;
					row++;
				}
				}
			}
			me._cloner_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggFilter[0] = "work";
		el.ggId="Cloner 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 25%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cloner_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cloner_1.childNodes.length; i++) {
				var child=me._cloner_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cloner_1.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._cloner_1.ggLastSize) || (me._cloner_1.ggLastSize.w!=w) || (me._cloner_1.ggLastSize.h!=h)) {
				me._cloner_1.ggLastSize={ w:w, h:h };
				me._cloner_1.ggUpdate();
			}
		}
		me._cloner_1.ggNodeChange=function () {
			me._cloner_1.ggUpdateConditionNodeChange();
		}
		me._scrollarea_1__content.appendChild(me._cloner_1);
		me._rectangle_3.appendChild(me._scrollarea_1);
		me.__19.appendChild(me._rectangle_3);
		me._ui_mobile.appendChild(me.__19);
		el=me.__18=document.createElement('div');
		el.ggId="\u53f3\u8fb9\u5bfc\u822a";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_112=document.createElement('div');
		els=me._image_112__img=document.createElement('img');
		els.className='ggskin ggskin_image_112';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80px;';
		hs+='position : absolute;';
		hs+='right : -16px;';
		hs+='top : 160px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_112.ggUpdatePosition=function (useTransition) {
		}
		me.__18.appendChild(me._image_112);
		el=me._image_111=document.createElement('div');
		els=me._image_111__img=document.createElement('img');
		els.className='ggskin ggskin_image_111';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80px;';
		hs+='position : absolute;';
		hs+='right : -16px;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_111.ggUpdatePosition=function (useTransition) {
		}
		me.__18.appendChild(me._image_111);
		el=me._image_110=document.createElement('div');
		els=me._image_110__img=document.createElement('img');
		els.className='ggskin ggskin_image_110';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 80px;';
		hs+='position : absolute;';
		hs+='right : 39px;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_110.ggUpdatePosition=function (useTransition) {
		}
		me.__18.appendChild(me._image_110);
		el=me._music0=document.createElement('div');
		els=me._music0__img=document.createElement('img');
		els.className='ggskin ggskin_music0';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="music";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 30%;';
		hs+='top : 2%;';
		hs+='visibility : inherit;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._music0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._music0.onclick=function (e) {
			player.setVolume("_main",0);
			me._musicclose0.style[domTransition]='none';
			me._musicclose0.style.visibility=(Number(me._musicclose0.style.opacity)>0||!me._musicclose0.style.opacity)?'inherit':'hidden';
			me._musicclose0.ggVisible=true;
			me._music0.style[domTransition]='none';
			me._music0.style.visibility='hidden';
			me._music0.ggVisible=false;
		}
		me._music0.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_27=document.createElement('div');
		els=me._text_27__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 31px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 1px;';
		hs+=cssPrefix + 'border-radius: 1px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u97f3\u4e50<br\/>";
		el.appendChild(els);
		me._text_27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_27.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._music0.appendChild(me._text_27);
		me.__18.appendChild(me._music0);
		el=me._help0=document.createElement('div');
		els=me._help0__img=document.createElement('img');
		els.className='ggskin ggskin_help0';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="help";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 2%;';
		hs+='top : 2%;';
		hs+='visibility : inherit;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._help0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._help0.onclick=function (e) {
			me._userdata_mobile.ggVisible = !me._userdata_mobile.ggVisible;
			var flag=me._userdata_mobile.ggVisible;
			me._userdata_mobile.style[domTransition]='none';
			me._userdata_mobile.style.visibility=((flag)&&(Number(me._userdata_mobile.style.opacity)>0||!me._userdata_mobile.style.opacity))?'inherit':'hidden';
		}
		me._help0.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_26=document.createElement('div');
		els=me._text_26__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110.05%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 31px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 1px;';
		hs+=cssPrefix + 'border-radius: 1px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5e2e\u52a9<br\/>";
		el.appendChild(els);
		me._text_26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_26.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._help0.appendChild(me._text_26);
		me.__18.appendChild(me._help0);
		el=me._svg_music_open=document.createElement('div');
		els=me._svg_music_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQzMzczMTUxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM3ODMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI5LjIxNiAwIDAgMjI5LjIxNiAwIDUxMmMwIDI4Mi43NjggMjI5LjIxNiA1MTIgNTEyIDUxMiAyODIuNzUyIDAgNTEyLTIyOS4yMzIgNTEyLTUxMkMxMDI0IDIyOS4yMTYgNzk0Ljc1MiAwIDUxMiAwek01MTIgOTkyQzI0Ni44OTYgOTkyIDMyIDc3Ny4wODggMzIgNTEyIDMyIDI0Ni44OTYgMjQ2Ljg5NiAzMiA1MTIgMzJjMjY1LjA1NiAwIDQ4MCAyMTQuODk2IDQ4MCA0ODBDOTkyIDc3Ny4wODggNzc3LjA1NiA5OTIgNTEyIDk5MnoiIHAtaWQ9IjM3ODQiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJN'+
			'NzEwLjY3MiAyODEuNDRjMC0wLjQ5Ni0wLjI0LTAuOTI4LTAuMjg4LTEuNDA4LTAuMDQ4LTAuNDY0IDAuMTEyLTAuODk2IDAuMDMyLTEuMzYtMC4xMTItMC42MDgtMC40NjQtMS4wNTYtMC42NC0xLjYzMi0wLjMyLTEuMDcyLTAuNjcyLTIuMDgtMS4xODQtMy4wNC0wLjQ4LTAuODgtMS4wMjQtMS42NjQtMS42NjQtMi40MzItMC42NTYtMC44MTYtMS4zMjgtMS41NTItMi4xNDQtMi4yMjQtMC43ODQtMC42NC0xLjU4NC0xLjE2OC0yLjQ2NC0xLjY2NC0wLjg5Ni0wLjQ5Ni0xLjc5Mi0wLjkyOC0yLjgtMS4yNDgtMC45OTItMC4zMzYtMi0wLjQ5Ni0zLjA3Mi0wLjYyNC0wLjYwOC0wLjA2NC0xLjEzNi'+
			'0wLjM1Mi0xLjc3Ni0wLjM1Mi0wLjQ5NiAwLTAuOTI4IDAuMjQtMS40MDggMC4yODgtMC40NjQgMC4wMzItMC45MTItMC4xMTItMS4zNzYtMC4wMzJsLTM2MC4xMTIgNjMuODA4Yy0wLjc1MiAwLjEyOC0xLjMyOCAwLjU3Ni0yLjAzMiAwLjgtMC44MzIgMC4yNzItMS42MTYgMC41NDQtMi4zNjggMC45NDQtMS4wODggMC41Ni0yLjAzMiAxLjIxNi0yLjk2IDItMC42NzIgMC41Ni0xLjI2NCAxLjEwNC0xLjgyNCAxLjc2LTAuNzUyIDAuODgtMS4zNiAxLjc5Mi0xLjkwNCAyLjgxNi0wLjQzMiAwLjgxNi0wLjgxNiAxLjYxNi0xLjEwNCAyLjQ5Ni0wLjM1MiAxLjA1Ni0wLjU0NCAyLjEyOC0wLjY3MiAz'+
			'LjI2NC0wLjA2NCAwLjYwOC0wLjM1MiAxLjEyLTAuMzUyIDEuNzQ0bDAgMzEwLjcwNGMtMTEuNDQtNS45NjgtMjUuMi05LjQ3Mi00MC05LjQ3Mi0zOS43NiAwLTcyIDI1LjA4OC03MiA1NiAwIDMwLjk0NCAzMi4yNCA1NiA3MiA1NnM3Mi0yNS4wNTYgNzItNTZjMC0wLjE2LTAuMDY0LTAuMzItMC4wNjQtMC40OTYgMC0wLjEyOCAwLjA2NC0wLjIyNCAwLjA2NC0wLjMyTDM1MC41NiA0NjAuMjA4bDMyOC4xMjgtNTcuODU2TDY3OC42ODggNTkyLjE2Yy0xMS40NC01Ljk2OC0yNS4xODQtOS40NzItNDAtOS40NzItMzkuNzc2IDAtNzIgMjUuMDg4LTcyIDU2czMyLjIyNCA1NiA3MiA1NmMzOS43NDQgMC'+
			'A3Mi0yNS4wODggNzItNTYgMC0wLjE5Mi0wLjA2NC0wLjMzNi0wLjA2NC0wLjQ5NiAwLTAuMTI4IDAuMDY0LTAuMjI0IDAuMDY0LTAuMzM2TDcxMC42ODggMjgxLjQ0ek0yNzguNTQ0IDcyNi41NmMtMjIuMDk2IDAtNDAtMTAuNzUyLTQwLTI0czE3LjkwNC0yNCA0MC0yNCA0MCAxMC43NTIgNDAgMjRTMzAwLjY0IDcyNi41NiAyNzguNTQ0IDcyNi41NnpNNjM4LjY3MiA2NjIuNjg4Yy0yMi4wOTYgMC00MC0xMC43NTItNDAtMjRzMTcuOTA0LTI0IDQwLTI0IDQwIDEwLjc1MiA0MCAyNFM2NjAuNzY4IDY2Mi42ODggNjM4LjY3MiA2NjIuNjg4ek0zNTAuNTQ0IDQyNy43MTJsMC02OS4wNCAzMjguMTI4'+
			'LTU4LjE0NCAwIDY5LjMyOEwzNTAuNTQ0IDQyNy43MTJ6IiBwLWlkPSIzNzg1IiBmaWxsPSIjZjNkNWI5Ij48L3BhdGg+PC9zdmc+';
		me._svg_music_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_music_open;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg music open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 30%;';
		hs+='top : 2%;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_music_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_music_open.onclick=function (e) {
			player.changeVolume("_main",0);
			me._svg_music_close.style[domTransition]='none';
			me._svg_music_close.style.visibility=(Number(me._svg_music_close.style.opacity)>0||!me._svg_music_close.style.opacity)?'inherit':'hidden';
			me._svg_music_close.ggVisible=true;
			me._svg_music_open.style[domTransition]='none';
			me._svg_music_open.style.visibility='hidden';
			me._svg_music_open.ggVisible=false;
		}
		me._svg_music_open.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_25=document.createElement('div');
		els=me._text_25__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 31px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 1px;';
		hs+=cssPrefix + 'border-radius: 1px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u97f3\u4e50<br\/>";
		el.appendChild(els);
		me._text_25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_25.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._svg_music_open.appendChild(me._text_25);
		me.__18.appendChild(me._svg_music_open);
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5ODI3NjE5ODkwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjUgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjkwMDUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwLjE5NTMxMjUiIGhlaWdodD0iMjAwIj48ZGVmcz'+
			'48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MTEuMjY3MTg0IDEuNDY1NjMzYy0yODIuMzU1ODIzIDAtNTExLjI2NzE4NCAyMjguODc3Mjc2LTUxMS4yNjcxODQgNTExLjI2NzE4NCAwIDI4Mi4zMjE3MzkgMjI4LjkxMTM2IDUxMS4yNjcxODQgNTExLjI2NzE4NCA1MTEuMjY3MTg0IDI4Mi4zODk5MDggMCA1MTEuMjY3MTg0LTIyOC45NDU0NDUgNTExLjI2NzE4NC01MTEuMjY3MTg0QzEwMjIuNTM0MzY3IDIzMC4zNDI5MDggNzkzLjYyMzAwNyAxLjQ2NTYzMyA1MTEuMjY3MTg0IDEuNDY1NjMzek01MTEuMjY3MTg0IDk4OS45MTU1MjFjLTI2My41NDExOTEg'+
			'MC00NzcuMTgyNzA1LTIxMy42NDE1MTQtNDc3LjE4MjcwNS00NzcuMTgyNzA1czIxMy42NDE1MTQtNDc3LjE4MjcwNSA0NzcuMTgyNzA1LTQ3Ny4xODI3MDVjMjYzLjU3NTI3NSAwIDQ3Ny4xODI3MDUgMjEzLjY0MTUxNCA0NzcuMTgyNzA1IDQ3Ny4xODI3MDVTNzc0Ljg0MjQ1OSA5ODkuOTE1NTIxIDUxMS4yNjcxODQgOTg5LjkxNTUyMXoiIHAtaWQ9IjkwMDYiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJNNTA0LjE0MzUyOCA3MjUuNjI0NDcybDM0LjA4NDQ3OSAwIDAgMzQuMDg0NDc5LTM0LjA4NDQ3OSAwIDAtMzQuMDg0NDc5WiIgcC1pZD0iOTAwNyIgZmlsbD0iI2YzZDViOSI+PC'+
			'9wYXRoPjxwYXRoIGQ9Ik01MTEuMjMzMDk5IDI2NS43OTA3NjdjLTc3LjYxMDM1OCAwLTE0MC41NjQzOTEgNjIuOTE5OTQ4LTE0MC41NjQzOTEgMTQwLjU5ODQ3NmwzNC4wODQ0NzkgMGMwLTU4Ljg2Mzg5NSA0Ny42ODQxODYtMTA2LjUxMzk5NyAxMDYuNDc5OTEyLTEwNi41MTM5OTcgNTguODYzODk1IDAgMTA2LjU0ODA4MSA0Ny42NTAxMDIgMTA2LjU0ODA4MSAxMDYuNTEzOTk3IDAgMzYuNjA2NzMtMTguNTA3ODcyIDY4Ljg4NDczMi00Ni42OTU3MzYgODguMDc0Mjk0LTEuNzA0MjI0IDEuMDU2NjE5LTMuNTc4ODcgMS44MDY0NzctNS4yNDkwMSAyLjkzMTI2NS0xOC4xNjcwMjcgMTIuMzM4NTgx'+
			'LTMyLjc4OTI2OSAyOS4xNzYzMTQtNDMuNDkxNzk1IDQ4LjQ2ODEyOS0xMS4yMTM3OTQgMjAuMjEyMDk2LTE4LjE2NzAyNyA3Ny4yMzU0MjktMTguMTY3MDI3IDEwMS45ODA3NjFsMCAyNi45NjA4MjMgMzQuMDg0NDc5IDAgMC0yNi45NjA4MjNjMC0zNi42NDA4MTUgMTguNTA3ODcyLTEwMy4wMDMyOTUgNDYuNjYxNjUyLTEyMi4xNTg3NzIgMS42NzAxMzktMS4xMjQ3ODggMy41NDQ3ODYtMS45NDI4MTUgNS4yNDkwMS0yLjk2NTM1IDE4LjE2NzAyNy0xMi4zMzg1ODEgMzIuNzg5MjY5LTI5LjE0MjIyOSA0My40OTE3OTUtNDguNDY4MTI5IDExLjI0Nzg3OC0yMC4yMTIwOTYgMTguMjAxMTEyLTQzLj'+
			'ExNjg2NiAxOC4yMDExMTItNjcuODYyMTk4QzY1MS44NjU2NTkgMzI4LjcxMDcxNSA1ODguOTExNjI3IDI2NS43OTA3NjcgNTExLjIzMzA5OSAyNjUuNzkwNzY3eiIgcC1pZD0iOTAwOCIgZmlsbD0iI2YzZDViOSI+PC9wYXRoPjwvc3ZnPg==';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_3;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 2%;';
		hs+='top : 2%;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.onclick=function (e) {
			me._userdata_mobile.ggVisible = !me._userdata_mobile.ggVisible;
			var flag=me._userdata_mobile.ggVisible;
			me._userdata_mobile.style[domTransition]='none';
			me._userdata_mobile.style.visibility=((flag)&&(Number(me._userdata_mobile.style.opacity)>0||!me._userdata_mobile.style.opacity))?'inherit':'hidden';
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_24=document.createElement('div');
		els=me._text_24__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 31px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 1px;';
		hs+=cssPrefix + 'border-radius: 1px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5e2e\u52a9<br\/>";
		el.appendChild(els);
		me._text_24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_24.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._svg_3.appendChild(me._text_24);
		me.__18.appendChild(me._svg_3);
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQzMTMzMDc1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MTYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDk1NS41Yy0yMS4yIDAtNDEtOS40LTU0LjUtMjUuOC0zOC41LTQ3LjEtMTEyLjUtMTQwLjYtMTc1LTIzOC40LTM0LjEtNTMuNC02MC45LTEwMi03OS44LTE0NC42LTIzLjMtNTIuNy0zNC43LTk1LjktMzQuNy0xMzIgMC00Ni4xIDkuMS05MC44IDI3LjEtMTMzIDE3LjMtNDAuNyA0Mi4yLTc3LjIgNzMuOC0xMDguNSAzMS42LTMxLjMgNjguNC01NS45IDEwOS4zLTczLjEgNDIuNC0xNy44IDg3LjQtMjYuOCAxMzMuOC0yNi44czkxLjQgOSAxMzMuOCAyNi44YzQxIDE3LjIgNzcuNyA0MS44IDEwOS4zIDczLjEgMzEuNiAz'+
			'MS4zIDU2LjQgNjcuOSA3My44IDEwOC41IDE4IDQyLjEgMjcuMSA4Ni45IDI3LjEgMTMzIDAgNzEuMi00Ni42IDE3Ni42LTEzOC42IDMxMy40LTcuNCAxMS0yMi4zIDEzLjktMzMuMyA2LjUtMTEtNy40LTEzLjktMjIuMy02LjUtMzMuM0M3NjIuOSA1NzQuNCA4MDggNDc1LjMgODA4IDQxNC43YzAtMTYxLjgtMTMyLjgtMjkzLjQtMjk2LTI5My40UzIxNiAyNTIuOSAyMTYgNDE0LjdjMCA1NC41IDM3IDE0MS4yIDEwNi45IDI1MC44IDYxLjEgOTUuNyAxMzMuOCAxODcuNiAxNzEuNyAyMzMuOCA1LjkgNy4yIDEzLjQgOC4yIDE3LjQgOC4yczExLjUtMS4xIDE3LjQtOC4yYzE0LTE3IDI4LjEtMzQuNy'+
			'A0MS45LTUyLjMgMTQuNy0xOC44IDI5LjEtMzcuNiA0Mi44LTU2LjEgNy45LTEwLjYgMjIuOS0xMi44IDMzLjYtNC45IDEwLjYgNy45IDEyLjggMjIuOSA0LjkgMzMuNi0xNCAxOC44LTI4LjYgMzgtNDMuNiA1Ny4xLTE0LjEgMTgtMjguNCAzNS45LTQyLjYgNTMuMi0xMy4zIDE2LjItMzMuMiAyNS42LTU0LjQgMjUuNnoiIHAtaWQ9IjI2MTciIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJNNTEyIDU4Ni4zYy05MC40IDAtMTY0LTczLjYtMTY0LTE2NHM3My42LTE2NCAxNjQtMTY0IDE2NCA3My42IDE2NCAxNjQtNzMuNSAxNjQtMTY0IDE2NHogbTAtMjgwYy02NCAwLTExNiA1Mi0xMTYg'+
			'MTE2czUyIDExNiAxMTYgMTE2IDExNi01MiAxMTYtMTE2LTUyLTExNi0xMTYtMTE2eiIgcC1pZD0iMjYxOCIgZmlsbD0iI2YzZDViOSI+PC9wYXRoPjwvc3ZnPg==';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_4;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 2%;';
		hs+='top : 180px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.onclick=function (e) {
			me.__mobile.ggVisible = !me.__mobile.ggVisible;
			var flag=me.__mobile.ggVisible;
			me.__mobile.style[domTransition]='none';
			me.__mobile.style.visibility=((flag)&&(Number(me.__mobile.style.opacity)>0||!me.__mobile.style.opacity))?'inherit':'hidden';
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_16=document.createElement('div');
		els=me._text_16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #f8dbbd;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5730\u56fe<br\/>";
		el.appendChild(els);
		me._text_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._svg_4.appendChild(me._text_16);
		me.__18.appendChild(me._svg_4);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 10";
		el.ggDx=76;
		el.ggDy=150;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10.onclick=function (e) {
			me.__mobile.ggVisible = !me.__mobile.ggVisible;
			var flag=me.__mobile.ggVisible;
			me.__mobile.style[domTransition]='none';
			me.__mobile.style.visibility=((flag)&&(Number(me.__mobile.style.opacity)>0||!me.__mobile.style.opacity))?'inherit':'hidden';
		}
		me._image_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_15=document.createElement('div');
		els=me._text_15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #f8dbbd;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5730\u56fe<br\/>";
		el.appendChild(els);
		me._text_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._image_10.appendChild(me._text_15);
		me.__18.appendChild(me._image_10);
		el=me._svg_music_close=document.createElement('div');
		els=me._svg_music_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQyMTg5MDE4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyNDgiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluay'+
			'Igd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY3Ni45MjU0NCA1NTguMDhjLTUyLjM2NzM2IDAtOTQuOTQ1MjggNDMuMDY5NDQtOTQuOTQ1MjggOTYuMDEwMjRzNDIuNTc3OTIgOTYuMDEwMjQgOTQuOTQ1MjggOTYuMDEwMjRjNDUuOTU3MTIgMCA4NC4zMzY2NC0zMy4xOTgwOCA5My4wNDA2NC03Ny4xMjc2OCAxLjE2NzM2LTIuNTgwNDggMS44ODQxNi01LjM4NjI0IDEuODg0MTYtOC4zOTY4TDc3MS44NTAyNCAyMTcuNmMwLTYuMTg0OTYtMi44MDU3Ni0xMi4wNDIyNC03LjU5ODA4LTE1LjkxMjk2LTQu'+
			'NzkyMzItMy44OTEyLTExLjA3OTY4LTUuNDQ3NjgtMTcuMTYyMjQtNC4wOTZsLTM4My41Njk5MiA4MS45MmMtOS40NDEyOCAyLjAwNzA0LTE2LjE5OTY4IDEwLjM2Mjg4LTE2LjE5OTY4IDIwLjAyOTQ0bDAgMzc4LjE0MjcyYy0xNS4zMzk1Mi0xMC43NzI0OC0zMy45MTQ4OC0xNy4xODI3Mi01My45ODUyOC0xNy4xODI3Mi01Mi4zNDY4OCAwLTk0LjkyNDggNDMuMDY5NDQtOTQuOTI0OCA5Ni4wMTAyNHM0Mi41Nzc5MiA5Ni4wMTAyNCA5NC45MjQ4IDk2LjAxMDI0YzUyLjM2NzM2IDAgOTQuOTQ1MjgtNDMuMDY5NDQgOTQuOTQ1MjgtOTYuMDEwMjQgMC0yLjI5Mzc2LTAuNTEyLTQuNDQ0MTYtMC42Nz'+
			'U4NC02LjY3NjQ4IDAuMTg0MzItMS4xMjY0IDAuNjc1ODQtMi4xMjk5MiAwLjY3NTg0LTMuMzE3NzZMMzg4LjI4MDMyIDQzOC45NjgzMmwzNDIuNjA5OTItNzMuMTc1MDQgMCAyMDkuNDg5OTJDNzE1LjUzMDI0IDU2NC40OTAyNCA2OTYuOTc1MzYgNTU4LjA4IDY3Ni45MjU0NCA1NTguMDh6TTY3Ni45MjU0NCA3MDkuMTJjLTI5Ljc1NzQ0IDAtNTMuOTg1MjgtMjQuNjk4ODgtNTMuOTg1MjgtNTUuMDUwMjRzMjQuMjI3ODQtNTUuMDUwMjQgNTMuOTg1MjgtNTUuMDUwMjQgNTMuOTY0OCAyNC42OTg4OCA1My45NjQ4IDU1LjA1MDI0UzcwNi42ODI4OCA3MDkuMTIgNjc2LjkyNTQ0IDcwOS4xMnpNMjkz'+
			'LjMxNDU2IDgxMS41MmMtMjkuNzU3NDQgMC01My45NjQ4LTI0LjY5ODg4LTUzLjk2NDgtNTUuMDUwMjRzMjQuMjA3MzYtNTUuMDUwMjQgNTMuOTY0OC01NS4wNTAyNCA1My45ODUyOCAyNC42OTg4OCA1My45ODUyOCA1NS4wNTAyNFMzMjMuMDcyIDgxMS41MiAyOTMuMzE0NTYgODExLjUyek0zODguMjU5ODQgMzk3LjA4NjcybDAtODEuMDE4ODggMzQyLjYwOTkyLTczLjE1NDU2IDAgODAuOTk4NEwzODguMjU5ODQgMzk3LjA4NjcyeiIgcC1pZD0iMjI0OSIgZmlsbD0iI2YzZDViOSIgZGF0YS1zcG0tYW5jaG9yLWlkPSJhMzEzeC43NzgxMDY5LjAuaTQiIGNsYXNzPSJzZWxlY3RlZCI+PC9wYXRoPj'+
			'wvc3ZnPg==';
		me._svg_music_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_music_close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg music close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 30%;';
		hs+='top : 2%;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_music_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_music_close.onclick=function (e) {
			player.changeVolume("_main",1);
			me._svg_music_close.style[domTransition]='none';
			me._svg_music_close.style.visibility='hidden';
			me._svg_music_close.ggVisible=false;
			me._svg_music_open.style[domTransition]='none';
			me._svg_music_open.style.visibility=(Number(me._svg_music_open.style.opacity)>0||!me._svg_music_open.style.opacity)?'inherit':'hidden';
			me._svg_music_open.ggVisible=true;
		}
		me._svg_music_close.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_23=document.createElement('div');
		els=me._text_23__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 31px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 1px;';
		hs+=cssPrefix + 'border-radius: 1px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u97f3\u4e50<br\/>";
		el.appendChild(els);
		me._text_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_23.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._svg_music_close.appendChild(me._text_23);
		me.__18.appendChild(me._svg_music_close);
		el=me._musicclose0=document.createElement('div');
		els=me._musicclose0__img=document.createElement('img');
		els.className='ggskin ggskin_musicclose0';
		hs='data:image/png;base64,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'+
			'rkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="musicclose";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 30%;';
		hs+='top : 2%;';
		hs+='visibility : hidden;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._musicclose0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._musicclose0.onclick=function (e) {
			player.setVolume("_main",1);
			me._musicclose0.style[domTransition]='none';
			me._musicclose0.style.visibility='hidden';
			me._musicclose0.ggVisible=false;
			me._music0.style[domTransition]='none';
			me._music0.style.visibility=(Number(me._music0.style.opacity)>0||!me._music0.style.opacity)?'inherit':'hidden';
			me._music0.ggVisible=true;
		}
		me._musicclose0.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_22=document.createElement('div');
		els=me._text_22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 31px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 1px;';
		hs+=cssPrefix + 'border-radius: 1px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u97f3\u4e50<br\/>";
		el.appendChild(els);
		me._text_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_22.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._musicclose0.appendChild(me._text_22);
		me.__18.appendChild(me._musicclose0);
		me._ui_mobile.appendChild(me.__18);
		el=me.__17=document.createElement('div');
		els=me.__17__img=document.createElement('img');
		els.className='ggskin ggskin__17';
		hs=basePath + 'images/_17.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u5de6\u8fb9\u5bfc\u822a";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 137px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 186px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		me._ui_mobile.appendChild(me.__17);
		el=me.__16=document.createElement('div');
		el.ggId="\u5e95\u90e8\u4ea4\u4e92";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_20=document.createElement('div');
		els=me._svg_20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQzMTExMDgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwODAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMjA3LjMgNTExLjVtLTk0IDBhOTQgOTQgMCAxIDAgMTg4IDAgOTQgOTQgMCAxIDAtMTg4IDBaIiBwLWlkPSIyMDgxIiBmaWxsPSIjZjNkNWI5Ij48L3BhdGg+PHBhdGggZD0iTTUxMiA1MTEuNW0tOTQgMGE5NCA5NCAwIDEgMCAxODggMCA5NCA5NCAwIDEgMC0xODggMFoiIHAtaWQ9IjIwODIiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJNODE2LjcgNTExLjVtLTk0IDBhOTQgOTQgMCAxIDAgMTg4IDAgOTQgOTQgMCAxIDAtMTg4IDBaIiBwLWlkPSIyMDgzIiBmaWxsPSIjZjNkNWI5Ij48L3BhdGg+PC9zdmc+';
		me._svg_20__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_20;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5%;';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('OpenState') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(player.getVariableValue('OpenState') == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_20.style[domTransition]='';
				if (me._svg_20.ggCurrentLogicStateVisible == 0) {
					me._svg_20.style.visibility=(Number(me._svg_20.style.opacity)>0||!me._svg_20.style.opacity)?'inherit':'hidden';
					me._svg_20.ggVisible=true;
				}
				else if (me._svg_20.ggCurrentLogicStateVisible == 1) {
					me._svg_20.style.visibility="hidden";
					me._svg_20.ggVisible=false;
				}
				else {
					me._svg_20.style.visibility=(Number(me._svg_20.style.opacity)>0||!me._svg_20.style.opacity)?'inherit':'hidden';
					me._svg_20.ggVisible=true;
				}
			}
		}
		me._svg_20.onclick=function (e) {
			player.setVariableValue('OpenState', false);
			if (player.transitionsDisabled) {
				me.__19.style[domTransition]='none';
			} else {
				me.__19.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me.__19.ggParameter.rx=0;me.__19.ggParameter.ry=-100;
			me.__19.style[domTransform]=parameterToTransform(me.__19.ggParameter);
		}
		me._svg_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_30=document.createElement('div');
		els=me._text_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 70%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 30px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(108,95,83,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5c55\u5f00\u5bfc\u822a<br\/>";
		el.appendChild(els);
		me._text_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_30.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._svg_20.appendChild(me._text_30);
		me.__16.appendChild(me._svg_20);
		el=me._image_90=document.createElement('div');
		els=me._image_90__img=document.createElement('img');
		els.className='ggskin ggskin_image_90';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15%;';
		hs+='cursor : pointer;';
		hs+='height : 95px;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_90.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_90.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getVariableValue('OpenState') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(player.getVariableValue('OpenState') == false)
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_90.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_90.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_90.style[domTransition]='left 0s, bottom 0s';
				if (me._image_90.ggCurrentLogicStatePosition == 0) {
					me._image_90.style.left='0%';
					me._image_90.style.bottom='15%';
				}
				else if (me._image_90.ggCurrentLogicStatePosition == 1) {
					me._image_90.style.left='-100%';
					me._image_90.style.bottom='15%';
				}
				else {
					me._image_90.style.left='0%';
					me._image_90.style.bottom='15%';
				}
			}
		}
		me._image_90.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._image_90.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me._image_90);
		el=me._image_80=document.createElement('div');
		els=me._image_80__img=document.createElement('img');
		els.className='ggskin ggskin_image_80';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15%;';
		hs+='cursor : pointer;';
		hs+='height : 95px;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_80.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_80.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getVariableValue('OpenState') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(player.getVariableValue('OpenState') == false)
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_80.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_80.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_80.style[domTransition]='right 0s, bottom 0s';
				if (me._image_80.ggCurrentLogicStatePosition == 0) {
					me._image_80.style.right='0%';
					me._image_80.style.bottom='15%';
				}
				else if (me._image_80.ggCurrentLogicStatePosition == 1) {
					me._image_80.style.right='-100%';
					me._image_80.style.bottom='15%';
				}
				else {
					me._image_80.style.right='0%';
					me._image_80.style.bottom='15%';
				}
			}
		}
		me._image_80.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._image_80.ggUpdatePosition=function (useTransition) {
		}
		me.__16.appendChild(me._image_80);
		me._ui_mobile.appendChild(me.__16);
		el=me._userdata_mobile=document.createElement('div');
		el.ggId="userdata_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdata_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_mobile.onclick=function (e) {
			me._userdata_mobile.style[domTransition]='none';
			me._userdata_mobile.style.visibility='hidden';
			me._userdata_mobile.ggVisible=false;
		}
		me._userdata_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._userdatabg1=document.createElement('div');
		el.ggId="userdatabg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 186px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdatabg1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabg1.ggUpdatePosition=function (useTransition) {
		}
		me._userdata_mobile.appendChild(me._userdatabg1);
		el=me._userdatabrd1=document.createElement('div');
		el.ggId="userdatabrd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 185px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdatabrd1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabrd1.ggUpdatePosition=function (useTransition) {
		}
		me._userdata_mobile.appendChild(me._userdatabrd1);
		el=me._title1=document.createElement('div');
		els=me._title1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 266px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 266px;';
		hs+='height: 31px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u7248\u6743\u6240\u6709";
		el.appendChild(els);
		me._title1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title1.ggUpdatePosition=function (useTransition) {
		}
		me._userdata_mobile.appendChild(me._title1);
		el=me._author1=document.createElement('div');
		els=me._author1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="author";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 34px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : 227px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 227px;';
		hs+='height: 34px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._author1.ggUpdateText=function() {
			var hs=me.ggUserdata.author+"\u6df1\u5733\u804c\u4e1a\u6280\u672f\u5b66\u9662";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._author1.ggUpdateText();
		el.appendChild(els);
		me._author1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._author1.ggUpdatePosition=function (useTransition) {
		}
		me._userdata_mobile.appendChild(me._author1);
		el=me._datetime1=document.createElement('div');
		els=me._datetime1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="datetime";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 94px;';
		hs+='visibility : inherit;';
		hs+='width : 315px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 315px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._datetime1.ggUpdateText=function() {
			var hs=me.ggUserdata.author+"\u865a\u62df\u73b0\u5b9e\uff08VR\uff09\u6280\u672f\u5b9e\u9a8c\u5ba4";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._datetime1.ggUpdateText();
		el.appendChild(els);
		me._datetime1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._datetime1.ggUpdatePosition=function (useTransition) {
		}
		me._userdata_mobile.appendChild(me._datetime1);
		el=me._copyright1=document.createElement('div');
		els=me._copyright1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="copyright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 34px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 145px;';
		hs+='visibility : inherit;';
		hs+='width : 324px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 324px;';
		hs+='height: 34px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._copyright1.ggUpdateText=function() {
			var hs="&#169; "+me.ggUserdata.copyright+" <a href=\"https:\/\/www.szpt.edu.cn\" target=\"_blank\">https:\/\/www.szpt.edu.cn\/<\/a>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._copyright1.ggUpdateText();
		el.appendChild(els);
		me._copyright1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._copyright1.ggUpdatePosition=function (useTransition) {
		}
		me._userdata_mobile.appendChild(me._copyright1);
		me._ui_mobile.appendChild(me._userdata_mobile);
		me.__14.appendChild(me._ui_mobile);
		el=me.__mobile=document.createElement('div');
		el.ggId="\u5c0f\u5730\u56fe_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__mobile.onclick=function (e) {
			me.__mobile.style[domTransition]='none';
			me.__mobile.style.visibility='hidden';
			me.__mobile.ggVisible=false;
		}
		me.__mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._roomdescriptioncontainermobile=document.createElement('div');
		el.ggId="room-description-container-mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 350px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._roomdescriptioncontainermobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roomdescriptioncontainermobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._roomnametextbox0=document.createElement('div');
		els=me._roomnametextbox0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="room-name-textbox";
		el.ggDx=0;
		el.ggDy=-148;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 354px;';
		hs+='height: 54px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 2px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 9px 10px 9px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u67e5\u770b\u4f4d\u7f6e";
		el.appendChild(els);
		me._roomnametextbox0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roomnametextbox0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 4;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._down1=document.createElement('div');
		els=me._down1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4bWw6c3'+
			'BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIwLjkwOCwxMy4wMDdsLTQuOTM4LDUuNDgxbC00LjkzOC01LjQ4MWMtMC40NDMtMC40OTEtMS4xOTktMC41MzEtMS42ODktMC4wODgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ5MSwwLjQ0Mi0wLjUzLDEuMTk5LTAuMDg4LDEuNjg5bDUuODI3LDYuNDY4YzAuMjI2LDAuMjUsMC41NTEsMC4zOTYsMC44ODksMC4zOTZzMC42NjMtMC4xNDYs'+
			'MC44ODktMC4zOTZsNS44MjctNi40NjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDQyLTAuNDkxLDAuNDAyLTEuMjQ4LTAuMDg4LTEuNjg5QzIyLjEwNiwxMi40NzcsMjEuMzUsMTIuNTE3LDIwLjkwOCwxMy4wMDd6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMywxLjgzMS'+
			'00LjM1MywyLjk2LTcuMTQ3LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ2eiIvPgogPC9nPgogPGc+CiAgPHBhdGgg'+
			'c3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgZD0iTTIwLjkwOCwxMy4wMDdsLTQuOTM4LDUuNDgxbC00LjkzOC01LjQ4MWMtMC40NDMtMC40OTEtMS4xOTktMC41MzEtMS42ODktMC4wODgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ5MSwwLjQ0Mi0wLjUzLDEuMTk5LTAuMDg4LDEuNjg5bDUuODI3LDYuNDY4YzAuMjI2LDAuMjUsMC41NTEsMC4zOTYsMC44ODksMC4zOTZzMC42NjMtMC4xNDYsMC44ODktMC4zOTZsNS44MjctNi40NjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDQyLTAuNDkxLDAuNDAyLTEuMjQ4LTAuMDg4LTEuNjg5Qz'+
			'IyLjEwNiwxMi40NzcsMjEuMzUsMTIuNTE3LDIwLjkwOCwxMy4wMDd6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMywxLjgzMS00LjM1MywyLjk2LTcuMTQ3LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._down1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;down1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._down1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4bWw6c3'+
			'BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjAuOTA4LDEzLjAwN2wtNC45MzgsNS40ODFsLTQuOTM4LTUuNDgxYy0wLjQ0My0wLjQ5MS0xLjE5OS0wLjUzMS0xLjY4OS0wLjA4OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDkxLDAuNDQyLTAuNTMsMS4xOTktMC4wODgsMS42ODls'+
			'NS44MjcsNi40NjhjMC4yMjYsMC4yNSwwLjU1MSwwLjM5NiwwLjg4OSwwLjM5NnMwLjY2My0wLjE0NiwwLjg4OS0wLjM5Nmw1LjgyNy02LjQ2OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40NDItMC40OTEsMC40MDItMS4yNDgtMC4wODgtMS42ODlDMjIuMTA2LDEyLjQ3NywyMS4zNSwxMi41MTcsMjAuOTA4LDEzLjAwN3ogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMT'+
			'YsMy41eiBNMjMuMTQ3LDIzLjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2'+
			'LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0yMC45MDgsMTMuMDA3bC00LjkzOCw1LjQ4MWwtNC45MzgtNS40ODFjLTAuNDQzLTAuNDkxLTEuMTk5LTAuNTMxLTEuNjg5LTAuMDg4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40OTEsMC40NDItMC41MywxLjE5OS0wLjA4OCwxLjY4OWw1LjgyNyw2LjQ2OGMwLjIyNiwwLjI1LDAuNT'+
			'UxLDAuMzk2LDAuODg5LDAuMzk2czAuNjYzLTAuMTQ2LDAuODg5LTAuMzk2bDUuODI3LTYuNDY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ0Mi0wLjQ5MSwwLjQwMi0xLjI0OC0wLjA4OC0xLjY4OUMyMi4xMDYsMTIuNDc3LDIxLjM1LDEyLjUxNywyMC45MDgsMTMuMDA3eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ2JiN4ZDsm'+
			'I3hhOyYjeDk7JiN4OTsmI3g5O2MtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMT'+
			'Q3LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._down1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;down1;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._down1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._down1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_loc_text') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._down1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._down1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._down1.style[domTransition]='';
				if (me._down1.ggCurrentLogicStateVisible == 0) {
					me._down1.style.visibility="hidden";
					me._down1.ggVisible=false;
				}
				else {
					me._down1.style.visibility=(Number(me._down1.style.opacity)>0||!me._down1.style.opacity)?'inherit':'hidden';
					me._down1.ggVisible=true;
				}
			}
		}
		me._down1.onclick=function (e) {
			player.setVariableValue('vis_loc_text', true);
		}
		me._down1.onmouseover=function (e) {
			me._down1__img.style.visibility='hidden';
			me._down1__imgo.style.visibility='inherit';
		}
		me._down1.onmouseout=function (e) {
			me._down1__img.style.visibility='inherit';
			me._down1__imgo.style.visibility='hidden';
		}
		me._down1.ggUpdatePosition=function (useTransition) {
		}
		me._roomnametextbox0.appendChild(me._down1);
		el=me._up1=document.createElement('div');
		els=me._up1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4bWw6c3'+
			'BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE2LjkxOSwxMC45MjNjLTAuMjI3LTAuMjUxLTAuNTUxLTAuMzk2LTAuODg5LTAuMzk2Yy0wLjMzNywwLTAuNjYzLDAuMTQ1LTAuODg5LDAuMzk2bC01LjgyNyw2LjQ2OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDQyLDAuNDkxLTAuNDAzLDEuMjQ4LDAuMDg4LDEuNjg5YzAuNDkxLDAuNDQyLDEuMjQ3LDAuNDAzLDEuNjg5LTAuMDg4bDQu'+
			'OTM4LTUuNDgxbDQuOTM4LDUuNDgxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIzNiwwLjI2MywwLjU2MywwLjM5NiwwLjg5LDAuMzk2YzAuMjg1LDAsMC41NzEtMC4xMDIsMC44LTAuMzA4YzAuNDkxLTAuNDQxLDAuNTMtMS4xOTgsMC4wODgtMS42ODlMMTYuOTE5LDEwLjkyM3ogTTE2LDMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7JiN4OTsgTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIz'+
			'LjE0NywyMy4xNDZ6Ii8+CiA8L2c+CiA8Zz4KICA8cGF0aCBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiBkPSJNMTYuOTE5LDEwLjkyM2MtMC4yMjctMC4yNTEtMC41NTEtMC4zOTYtMC44ODktMC4zOTZjLTAuMzM3LDAtMC42NjMsMC4xNDUtMC44ODksMC4zOTZsLTUuODI3LDYuNDY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDIsMC40OTEtMC40MDMsMS4yNDgsMC4wODgsMS42ODljMC40OTEsMC40NDIsMS4yNDcsMC40MDMsMS42ODktMC4wODhsNC45MzgtNS40ODFsNC45MzgsNS40ODEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMj'+
			'M2LDAuMjYzLDAuNTYzLDAuMzk2LDAuODksMC4zOTZjMC4yODUsMCwwLjU3MS0wLjEwMiwwLjgtMC4zMDhjMC40OTEtMC40NDEsMC41My0xLjE5OCwwLjA4OC0xLjY4OUwxNi45MTksMTAuOTIzeiBNMTYsMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0'+
			'NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._up1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;up1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._up1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4bWw6c3'+
			'BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMTYuOTE5LDEwLjkyM2MtMC4yMjctMC4yNTEtMC41NTEtMC4zOTYtMC44ODktMC4zOTZjLTAuMzM3LDAtMC42NjMsMC4xNDUtMC44ODksMC4zOTZsLTUuODI3LDYuNDY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDIsMC40OTEtMC40'+
			'MDMsMS4yNDgsMC4wODgsMS42ODljMC40OTEsMC40NDIsMS4yNDcsMC40MDMsMS42ODktMC4wODhsNC45MzgtNS40ODFsNC45MzgsNS40ODEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMjM2LDAuMjYzLDAuNTYzLDAuMzk2LDAuODksMC4zOTZjMC4yODUsMCwwLjU3MS0wLjEwMiwwLjgtMC4zMDhjMC40OTEtMC40NDEsMC41My0xLjE5OCwwLjA4OC0xLjY4OUwxNi45MTksMTAuOTIzeiBNMTYsMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LD'+
			'EyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzEs'+
			'MS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0NnoiLz4KIDwvZz4KIDxnIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTE2LjkxOSwxMC45MjNjLTAuMjI3LTAuMjUxLTAuNTUxLTAuMzk2LTAuODg5LTAuMzk2Yy0wLjMzNywwLTAuNjYzLDAuMTQ1LTAuODg5LDAuMzk2bC01LjgyNyw2LjQ2OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDQyLD'+
			'AuNDkxLTAuNDAzLDEuMjQ4LDAuMDg4LDEuNjg5YzAuNDkxLDAuNDQyLDEuMjQ3LDAuNDAzLDEuNjg5LTAuMDg4bDQuOTM4LTUuNDgxbDQuOTM4LDUuNDgxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIzNiwwLjI2MywwLjU2MywwLjM5NiwwLjg5LDAuMzk2YzAuMjg1LDAsMC41NzEtMC4xMDIsMC44LTAuMzA4YzAuNDkxLTAuNDQxLDAuNTMtMS4xOTgsMC4wODgtMS42ODlMMTYuOTE5LDEwLjkyM3ogTTE2LDMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5'+
			'OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeD'+
			'k7YzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._up1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;up1;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._up1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_loc_text') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._up1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._up1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._up1.style[domTransition]='';
				if (me._up1.ggCurrentLogicStateVisible == 0) {
					me._up1.style.visibility=(Number(me._up1.style.opacity)>0||!me._up1.style.opacity)?'inherit':'hidden';
					me._up1.ggVisible=true;
				}
				else {
					me._up1.style.visibility="hidden";
					me._up1.ggVisible=false;
				}
			}
		}
		me._up1.onclick=function (e) {
			player.setVariableValue('vis_loc_text', false);
		}
		me._up1.onmouseover=function (e) {
			me._up1__img.style.visibility='hidden';
			me._up1__imgo.style.visibility='inherit';
		}
		me._up1.onmouseout=function (e) {
			me._up1__img.style.visibility='inherit';
			me._up1__imgo.style.visibility='hidden';
		}
		me._up1.ggUpdatePosition=function (useTransition) {
		}
		me._roomnametextbox0.appendChild(me._up1);
		me._roomdescriptioncontainermobile.appendChild(me._roomnametextbox0);
		el=me._roomdropdowncontainer0=document.createElement('div');
		el.ggId="room-dropdown-container";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 350px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._roomdropdowncontainer0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roomdropdowncontainer0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_loc_text') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(player.getVariableValue('vis_loc_text') == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._roomdropdowncontainer0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._roomdropdowncontainer0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._roomdropdowncontainer0.style[domTransition]='';
				if (me._roomdropdowncontainer0.ggCurrentLogicStateVisible == 0) {
					me._roomdropdowncontainer0.style.visibility=(Number(me._roomdropdowncontainer0.style.opacity)>0||!me._roomdropdowncontainer0.style.opacity)?'inherit':'hidden';
					me._roomdropdowncontainer0.ggVisible=true;
				}
				else if (me._roomdropdowncontainer0.ggCurrentLogicStateVisible == 1) {
					me._roomdropdowncontainer0.style.visibility="hidden";
					me._roomdropdowncontainer0.ggVisible=false;
				}
				else {
					me._roomdropdowncontainer0.style.visibility=(Number(me._roomdropdowncontainer0.style.opacity)>0||!me._roomdropdowncontainer0.style.opacity)?'inherit':'hidden';
					me._roomdropdowncontainer0.ggVisible=true;
				}
			}
		}
		me._roomdropdowncontainer0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._roomdescriptiontextbox0=document.createElement('div');
		els=me._roomdescriptiontextbox0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="room-description-textbox";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 360px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 360px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 360px;';
		hs+='height: 360px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #ffffff;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 8px 9px 8px 9px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._roomdescriptiontextbox0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roomdescriptiontextbox0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_20=document.createElement('div');
		els=me._image_20__img=document.createElement('img');
		els.className='ggskin ggskin_image_20';
		hs=basePath + 'images/image_20.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 336px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 336px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._map_pin_10=document.createElement('div');
		el.ggId="map_pin_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 112px;';
		hs+='position : absolute;';
		hs+='top : 268px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active16=document.createElement('div');
		els=me._map_pin_active16__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active16';
		hs=basePath + 'images/map_pin_active16.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active16.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active16'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active16.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active16.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active16.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active16.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active16.ggParameter.sx = 1.1;
					me._map_pin_active16.ggParameter.sy = 1.1;
					me._map_pin_active16.style[domTransform]=parameterToTransform(me._map_pin_active16.ggParameter);
				}
				else {
					me._map_pin_active16.ggParameter.sx = 1;
					me._map_pin_active16.ggParameter.sy = 1;
					me._map_pin_active16.style[domTransform]=parameterToTransform(me._map_pin_active16.ggParameter);
				}
			}
		}
		me._map_pin_active16.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node2') || 
				(player.getCurrentNode() == 'node1') || 
				(player.getCurrentNode() == 'node3') || 
				(player.getCurrentNode() == 'node4')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node2') || 
				(player.getCurrentNode() != 'node4') || 
				(player.getCurrentNode() != 'node1') || 
				(player.getCurrentNode() != 'node3')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active16.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active16.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active16.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active16.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active16.style.visibility=me._map_pin_active16.ggVisible?'inherit':'hidden';
					me._map_pin_active16.style.opacity=1;
				}
				else if (me._map_pin_active16.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active16.style.visibility="hidden";
					me._map_pin_active16.style.opacity=0;
				}
				else {
					me._map_pin_active16.style.visibility="hidden";
					me._map_pin_active16.style.opacity=0;
				}
			}
		}
		me._map_pin_active16.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active16']=true;
			me._map_pin_active16.logicBlock_scaling();
		}
		me._map_pin_active16.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active16']=false;
			me._map_pin_active16.logicBlock_scaling();
		}
		me._map_pin_active16.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active16']=false;
			me._map_pin_active16.logicBlock_scaling();
		}
		me._map_pin_active16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_10.appendChild(me._map_pin_active16);
		el=me._map_pin_normal16=document.createElement('div');
		els=me._map_pin_normal16__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal16';
		hs=basePath + 'images/map_pin_normal16.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal16.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal16'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal16.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal16.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal16.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal16.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal16.ggParameter.sx = 1.1;
					me._map_pin_normal16.ggParameter.sy = 1.1;
					me._map_pin_normal16.style[domTransform]=parameterToTransform(me._map_pin_normal16.ggParameter);
				}
				else {
					me._map_pin_normal16.ggParameter.sx = 1;
					me._map_pin_normal16.ggParameter.sy = 1;
					me._map_pin_normal16.style[domTransform]=parameterToTransform(me._map_pin_normal16.ggParameter);
				}
			}
		}
		me._map_pin_normal16.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node2') || 
				(player.getCurrentNode() == 'node1') || 
				(player.getCurrentNode() == 'node3') || 
				(player.getCurrentNode() == 'node4')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node2') || 
				(player.getCurrentNode() != 'node4') || 
				(player.getCurrentNode() != 'node1') || 
				(player.getCurrentNode() != 'node3')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal16.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal16.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal16.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal16.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal16.style.visibility="hidden";
					me._map_pin_normal16.style.opacity=0;
				}
				else if (me._map_pin_normal16.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal16.style.visibility=me._map_pin_normal16.ggVisible?'inherit':'hidden';
					me._map_pin_normal16.style.opacity=1;
				}
				else {
					me._map_pin_normal16.style.visibility=me._map_pin_normal16.ggVisible?'inherit':'hidden';
					me._map_pin_normal16.style.opacity=1;
				}
			}
		}
		me._map_pin_normal16.onclick=function (e) {
			player.openNext("{node1}",player.hotspot.target);
		}
		me._map_pin_normal16.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal16']=true;
			me._map_pin_normal16.logicBlock_scaling();
		}
		me._map_pin_normal16.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal16']=false;
			me._map_pin_normal16.logicBlock_scaling();
		}
		me._map_pin_normal16.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal16']=false;
			me._map_pin_normal16.logicBlock_scaling();
		}
		me._map_pin_normal16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_10.appendChild(me._map_pin_normal16);
		me._image_20.appendChild(me._map_pin_10);
		el=me._map_pin_20=document.createElement('div');
		el.ggId="map_pin_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 213px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_20.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active15=document.createElement('div');
		els=me._map_pin_active15__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active15';
		hs=basePath + 'images/map_pin_active15.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active15.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active15'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active15.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active15.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active15.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active15.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active15.ggParameter.sx = 1.1;
					me._map_pin_active15.ggParameter.sy = 1.1;
					me._map_pin_active15.style[domTransform]=parameterToTransform(me._map_pin_active15.ggParameter);
				}
				else {
					me._map_pin_active15.ggParameter.sx = 1;
					me._map_pin_active15.ggParameter.sy = 1;
					me._map_pin_active15.style[domTransform]=parameterToTransform(me._map_pin_active15.ggParameter);
				}
			}
		}
		me._map_pin_active15.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node9') || 
				(player.getCurrentNode() == 'node5') || 
				(player.getCurrentNode() == 'node6') || 
				(player.getCurrentNode() == 'node7') || 
				(player.getCurrentNode() == 'node8')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node9') || 
				(player.getCurrentNode() != 'node5') || 
				(player.getCurrentNode() != 'node6') || 
				(player.getCurrentNode() != 'node7') || 
				(player.getCurrentNode() != 'node8')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active15.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active15.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active15.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active15.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active15.style.visibility=me._map_pin_active15.ggVisible?'inherit':'hidden';
					me._map_pin_active15.style.opacity=1;
				}
				else if (me._map_pin_active15.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active15.style.visibility="hidden";
					me._map_pin_active15.style.opacity=0;
				}
				else {
					me._map_pin_active15.style.visibility="hidden";
					me._map_pin_active15.style.opacity=0;
				}
			}
		}
		me._map_pin_active15.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active15']=true;
			me._map_pin_active15.logicBlock_scaling();
		}
		me._map_pin_active15.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active15']=false;
			me._map_pin_active15.logicBlock_scaling();
		}
		me._map_pin_active15.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active15']=false;
			me._map_pin_active15.logicBlock_scaling();
		}
		me._map_pin_active15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_20.appendChild(me._map_pin_active15);
		el=me._map_pin_normal15=document.createElement('div');
		els=me._map_pin_normal15__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal15';
		hs=basePath + 'images/map_pin_normal15.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal15.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal15'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal15.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal15.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal15.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal15.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal15.ggParameter.sx = 1.1;
					me._map_pin_normal15.ggParameter.sy = 1.1;
					me._map_pin_normal15.style[domTransform]=parameterToTransform(me._map_pin_normal15.ggParameter);
				}
				else {
					me._map_pin_normal15.ggParameter.sx = 1;
					me._map_pin_normal15.ggParameter.sy = 1;
					me._map_pin_normal15.style[domTransform]=parameterToTransform(me._map_pin_normal15.ggParameter);
				}
			}
		}
		me._map_pin_normal15.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node9') || 
				(player.getCurrentNode() == 'node5') || 
				(player.getCurrentNode() == 'node6') || 
				(player.getCurrentNode() == 'node7') || 
				(player.getCurrentNode() == 'node8')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node9') || 
				(player.getCurrentNode() != 'node5') || 
				(player.getCurrentNode() != 'node6') || 
				(player.getCurrentNode() != 'node8') || 
				(player.getCurrentNode() != 'node7')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal15.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal15.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal15.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal15.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal15.style.visibility="hidden";
					me._map_pin_normal15.style.opacity=0;
				}
				else if (me._map_pin_normal15.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal15.style.visibility=me._map_pin_normal15.ggVisible?'inherit':'hidden';
					me._map_pin_normal15.style.opacity=1;
				}
				else {
					me._map_pin_normal15.style.visibility=me._map_pin_normal15.ggVisible?'inherit':'hidden';
					me._map_pin_normal15.style.opacity=1;
				}
			}
		}
		me._map_pin_normal15.onclick=function (e) {
			player.openNext("{node9}",player.hotspot.target);
		}
		me._map_pin_normal15.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal15']=true;
			me._map_pin_normal15.logicBlock_scaling();
		}
		me._map_pin_normal15.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal15']=false;
			me._map_pin_normal15.logicBlock_scaling();
		}
		me._map_pin_normal15.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal15']=false;
			me._map_pin_normal15.logicBlock_scaling();
		}
		me._map_pin_normal15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_20.appendChild(me._map_pin_normal15);
		me._image_20.appendChild(me._map_pin_20);
		el=me._map_pin_30=document.createElement('div');
		el.ggId="map_pin_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 144px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_30.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active14=document.createElement('div');
		els=me._map_pin_active14__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active14';
		hs=basePath + 'images/map_pin_active14.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active14.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active14'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active14.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active14.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active14.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active14.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active14.ggParameter.sx = 1.1;
					me._map_pin_active14.ggParameter.sy = 1.1;
					me._map_pin_active14.style[domTransform]=parameterToTransform(me._map_pin_active14.ggParameter);
				}
				else {
					me._map_pin_active14.ggParameter.sx = 1;
					me._map_pin_active14.ggParameter.sy = 1;
					me._map_pin_active14.style[domTransform]=parameterToTransform(me._map_pin_active14.ggParameter);
				}
			}
		}
		me._map_pin_active14.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node11') || 
				(player.getCurrentNode() == 'node10') || 
				(player.getCurrentNode() == 'node12')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node11') || 
				(player.getCurrentNode() != 'node12') || 
				(player.getCurrentNode() != 'node10')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active14.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active14.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active14.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active14.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active14.style.visibility=me._map_pin_active14.ggVisible?'inherit':'hidden';
					me._map_pin_active14.style.opacity=1;
				}
				else if (me._map_pin_active14.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active14.style.visibility="hidden";
					me._map_pin_active14.style.opacity=0;
				}
				else {
					me._map_pin_active14.style.visibility="hidden";
					me._map_pin_active14.style.opacity=0;
				}
			}
		}
		me._map_pin_active14.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active14']=true;
			me._map_pin_active14.logicBlock_scaling();
		}
		me._map_pin_active14.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active14']=false;
			me._map_pin_active14.logicBlock_scaling();
		}
		me._map_pin_active14.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active14']=false;
			me._map_pin_active14.logicBlock_scaling();
		}
		me._map_pin_active14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_30.appendChild(me._map_pin_active14);
		el=me._map_pin_normal14=document.createElement('div');
		els=me._map_pin_normal14__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal14';
		hs=basePath + 'images/map_pin_normal14.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal14.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal14'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal14.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal14.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal14.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal14.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal14.ggParameter.sx = 1.1;
					me._map_pin_normal14.ggParameter.sy = 1.1;
					me._map_pin_normal14.style[domTransform]=parameterToTransform(me._map_pin_normal14.ggParameter);
				}
				else {
					me._map_pin_normal14.ggParameter.sx = 1;
					me._map_pin_normal14.ggParameter.sy = 1;
					me._map_pin_normal14.style[domTransform]=parameterToTransform(me._map_pin_normal14.ggParameter);
				}
			}
		}
		me._map_pin_normal14.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node12') || 
				(player.getCurrentNode() == 'node10') || 
				(player.getCurrentNode() == 'node11')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node11') || 
				(player.getCurrentNode() != 'node12') || 
				(player.getCurrentNode() != 'node10')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal14.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal14.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal14.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal14.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal14.style.visibility="hidden";
					me._map_pin_normal14.style.opacity=0;
				}
				else if (me._map_pin_normal14.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal14.style.visibility=me._map_pin_normal14.ggVisible?'inherit':'hidden';
					me._map_pin_normal14.style.opacity=1;
				}
				else {
					me._map_pin_normal14.style.visibility=me._map_pin_normal14.ggVisible?'inherit':'hidden';
					me._map_pin_normal14.style.opacity=1;
				}
			}
		}
		me._map_pin_normal14.onclick=function (e) {
			player.openNext("{node11}",player.hotspot.target);
		}
		me._map_pin_normal14.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal14']=true;
			me._map_pin_normal14.logicBlock_scaling();
		}
		me._map_pin_normal14.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal14']=false;
			me._map_pin_normal14.logicBlock_scaling();
		}
		me._map_pin_normal14.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal14']=false;
			me._map_pin_normal14.logicBlock_scaling();
		}
		me._map_pin_normal14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_30.appendChild(me._map_pin_normal14);
		me._image_20.appendChild(me._map_pin_30);
		el=me._map_pin_40=document.createElement('div');
		el.ggId="map_pin_4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 111px;';
		hs+='position : absolute;';
		hs+='top : 106px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_40.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active13=document.createElement('div');
		els=me._map_pin_active13__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active13';
		hs=basePath + 'images/map_pin_active13.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active13.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active13'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active13.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active13.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active13.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active13.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active13.ggParameter.sx = 1.1;
					me._map_pin_active13.ggParameter.sy = 1.1;
					me._map_pin_active13.style[domTransform]=parameterToTransform(me._map_pin_active13.ggParameter);
				}
				else {
					me._map_pin_active13.ggParameter.sx = 1;
					me._map_pin_active13.ggParameter.sy = 1;
					me._map_pin_active13.style[domTransform]=parameterToTransform(me._map_pin_active13.ggParameter);
				}
			}
		}
		me._map_pin_active13.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node13') || 
				(player.getCurrentNode() == 'node14') || 
				(player.getCurrentNode() == 'node15')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node13') || 
				(player.getCurrentNode() != 'node15') || 
				(player.getCurrentNode() != 'node14')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active13.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active13.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active13.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active13.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active13.style.visibility=me._map_pin_active13.ggVisible?'inherit':'hidden';
					me._map_pin_active13.style.opacity=1;
				}
				else if (me._map_pin_active13.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active13.style.visibility="hidden";
					me._map_pin_active13.style.opacity=0;
				}
				else {
					me._map_pin_active13.style.visibility="hidden";
					me._map_pin_active13.style.opacity=0;
				}
			}
		}
		me._map_pin_active13.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active13']=true;
			me._map_pin_active13.logicBlock_scaling();
		}
		me._map_pin_active13.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active13']=false;
			me._map_pin_active13.logicBlock_scaling();
		}
		me._map_pin_active13.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active13']=false;
			me._map_pin_active13.logicBlock_scaling();
		}
		me._map_pin_active13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_40.appendChild(me._map_pin_active13);
		el=me._map_pin_normal13=document.createElement('div');
		els=me._map_pin_normal13__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal13';
		hs=basePath + 'images/map_pin_normal13.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal13.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal13'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal13.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal13.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal13.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal13.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal13.ggParameter.sx = 1.1;
					me._map_pin_normal13.ggParameter.sy = 1.1;
					me._map_pin_normal13.style[domTransform]=parameterToTransform(me._map_pin_normal13.ggParameter);
				}
				else {
					me._map_pin_normal13.ggParameter.sx = 1;
					me._map_pin_normal13.ggParameter.sy = 1;
					me._map_pin_normal13.style[domTransform]=parameterToTransform(me._map_pin_normal13.ggParameter);
				}
			}
		}
		me._map_pin_normal13.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node13') || 
				(player.getCurrentNode() == 'node14') || 
				(player.getCurrentNode() == 'node15')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node13') || 
				(player.getCurrentNode() != 'node14') || 
				(player.getCurrentNode() != 'node15')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal13.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal13.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal13.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal13.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal13.style.visibility="hidden";
					me._map_pin_normal13.style.opacity=0;
				}
				else if (me._map_pin_normal13.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal13.style.visibility=me._map_pin_normal13.ggVisible?'inherit':'hidden';
					me._map_pin_normal13.style.opacity=1;
				}
				else {
					me._map_pin_normal13.style.visibility=me._map_pin_normal13.ggVisible?'inherit':'hidden';
					me._map_pin_normal13.style.opacity=1;
				}
			}
		}
		me._map_pin_normal13.onclick=function (e) {
			player.openNext("{node14}",player.hotspot.target);
		}
		me._map_pin_normal13.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal13']=true;
			me._map_pin_normal13.logicBlock_scaling();
		}
		me._map_pin_normal13.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal13']=false;
			me._map_pin_normal13.logicBlock_scaling();
		}
		me._map_pin_normal13.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal13']=false;
			me._map_pin_normal13.logicBlock_scaling();
		}
		me._map_pin_normal13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_40.appendChild(me._map_pin_normal13);
		me._image_20.appendChild(me._map_pin_40);
		el=me._map_pin_50=document.createElement('div');
		el.ggId="map_pin_5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 203px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_50.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active12=document.createElement('div');
		els=me._map_pin_active12__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active12';
		hs=basePath + 'images/map_pin_active12.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active12.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active12'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active12.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active12.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active12.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active12.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active12.ggParameter.sx = 1.1;
					me._map_pin_active12.ggParameter.sy = 1.1;
					me._map_pin_active12.style[domTransform]=parameterToTransform(me._map_pin_active12.ggParameter);
				}
				else {
					me._map_pin_active12.ggParameter.sx = 1;
					me._map_pin_active12.ggParameter.sy = 1;
					me._map_pin_active12.style[domTransform]=parameterToTransform(me._map_pin_active12.ggParameter);
				}
			}
		}
		me._map_pin_active12.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node16') || 
				(player.getCurrentNode() == 'node17') || 
				(player.getCurrentNode() == 'node18') || 
				(player.getCurrentNode() == 'node19')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node16') || 
				(player.getCurrentNode() != 'node17') || 
				(player.getCurrentNode() != 'node18') || 
				(player.getCurrentNode() != 'node19')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active12.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active12.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active12.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active12.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active12.style.visibility=me._map_pin_active12.ggVisible?'inherit':'hidden';
					me._map_pin_active12.style.opacity=1;
				}
				else if (me._map_pin_active12.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active12.style.visibility="hidden";
					me._map_pin_active12.style.opacity=0;
				}
				else {
					me._map_pin_active12.style.visibility="hidden";
					me._map_pin_active12.style.opacity=0;
				}
			}
		}
		me._map_pin_active12.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active12']=true;
			me._map_pin_active12.logicBlock_scaling();
		}
		me._map_pin_active12.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active12']=false;
			me._map_pin_active12.logicBlock_scaling();
		}
		me._map_pin_active12.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active12']=false;
			me._map_pin_active12.logicBlock_scaling();
		}
		me._map_pin_active12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_50.appendChild(me._map_pin_active12);
		el=me._map_pin_normal12=document.createElement('div');
		els=me._map_pin_normal12__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal12';
		hs=basePath + 'images/map_pin_normal12.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal12.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal12'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal12.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal12.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal12.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal12.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal12.ggParameter.sx = 1.1;
					me._map_pin_normal12.ggParameter.sy = 1.1;
					me._map_pin_normal12.style[domTransform]=parameterToTransform(me._map_pin_normal12.ggParameter);
				}
				else {
					me._map_pin_normal12.ggParameter.sx = 1;
					me._map_pin_normal12.ggParameter.sy = 1;
					me._map_pin_normal12.style[domTransform]=parameterToTransform(me._map_pin_normal12.ggParameter);
				}
			}
		}
		me._map_pin_normal12.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node16') || 
				(player.getCurrentNode() == 'node17') || 
				(player.getCurrentNode() == 'node19') || 
				(player.getCurrentNode() == 'node18')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node16') || 
				(player.getCurrentNode() != 'node17') || 
				(player.getCurrentNode() != 'node19') || 
				(player.getCurrentNode() != 'node18')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal12.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal12.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal12.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal12.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal12.style.visibility="hidden";
					me._map_pin_normal12.style.opacity=0;
				}
				else if (me._map_pin_normal12.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal12.style.visibility=me._map_pin_normal12.ggVisible?'inherit':'hidden';
					me._map_pin_normal12.style.opacity=1;
				}
				else {
					me._map_pin_normal12.style.visibility=me._map_pin_normal12.ggVisible?'inherit':'hidden';
					me._map_pin_normal12.style.opacity=1;
				}
			}
		}
		me._map_pin_normal12.onclick=function (e) {
			player.openNext("{node18}",player.hotspot.target);
		}
		me._map_pin_normal12.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal12']=true;
			me._map_pin_normal12.logicBlock_scaling();
		}
		me._map_pin_normal12.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal12']=false;
			me._map_pin_normal12.logicBlock_scaling();
		}
		me._map_pin_normal12.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal12']=false;
			me._map_pin_normal12.logicBlock_scaling();
		}
		me._map_pin_normal12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_50.appendChild(me._map_pin_normal12);
		me._image_20.appendChild(me._map_pin_50);
		el=me._map_pin_60=document.createElement('div');
		el.ggId="map_pin_6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 228px;';
		hs+='position : absolute;';
		hs+='top : 273px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_60.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active11=document.createElement('div');
		els=me._map_pin_active11__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active11';
		hs=basePath + 'images/map_pin_active11.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active11'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active11.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active11.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active11.ggParameter.sx = 1.1;
					me._map_pin_active11.ggParameter.sy = 1.1;
					me._map_pin_active11.style[domTransform]=parameterToTransform(me._map_pin_active11.ggParameter);
				}
				else {
					me._map_pin_active11.ggParameter.sx = 1;
					me._map_pin_active11.ggParameter.sy = 1;
					me._map_pin_active11.style[domTransform]=parameterToTransform(me._map_pin_active11.ggParameter);
				}
			}
		}
		me._map_pin_active11.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node20') || 
				(player.getCurrentNode() == 'node21') || 
				(player.getCurrentNode() == 'node22')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node22') || 
				(player.getCurrentNode() != 'node21') || 
				(player.getCurrentNode() != 'node20')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active11.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active11.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active11.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active11.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active11.style.visibility=me._map_pin_active11.ggVisible?'inherit':'hidden';
					me._map_pin_active11.style.opacity=1;
				}
				else if (me._map_pin_active11.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active11.style.visibility="hidden";
					me._map_pin_active11.style.opacity=0;
				}
				else {
					me._map_pin_active11.style.visibility="hidden";
					me._map_pin_active11.style.opacity=0;
				}
			}
		}
		me._map_pin_active11.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active11']=true;
			me._map_pin_active11.logicBlock_scaling();
		}
		me._map_pin_active11.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active11']=false;
			me._map_pin_active11.logicBlock_scaling();
		}
		me._map_pin_active11.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active11']=false;
			me._map_pin_active11.logicBlock_scaling();
		}
		me._map_pin_active11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_60.appendChild(me._map_pin_active11);
		el=me._map_pin_normal11=document.createElement('div');
		els=me._map_pin_normal11__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal11';
		hs=basePath + 'images/map_pin_normal11.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal11'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal11.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal11.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal11.ggParameter.sx = 1.1;
					me._map_pin_normal11.ggParameter.sy = 1.1;
					me._map_pin_normal11.style[domTransform]=parameterToTransform(me._map_pin_normal11.ggParameter);
				}
				else {
					me._map_pin_normal11.ggParameter.sx = 1;
					me._map_pin_normal11.ggParameter.sy = 1;
					me._map_pin_normal11.style[domTransform]=parameterToTransform(me._map_pin_normal11.ggParameter);
				}
			}
		}
		me._map_pin_normal11.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node20') || 
				(player.getCurrentNode() == 'node21') || 
				(player.getCurrentNode() == 'node22')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node20') || 
				(player.getCurrentNode() != 'node21') || 
				(player.getCurrentNode() != 'node22')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal11.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal11.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal11.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal11.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal11.style.visibility="hidden";
					me._map_pin_normal11.style.opacity=0;
				}
				else if (me._map_pin_normal11.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal11.style.visibility=me._map_pin_normal11.ggVisible?'inherit':'hidden';
					me._map_pin_normal11.style.opacity=1;
				}
				else {
					me._map_pin_normal11.style.visibility=me._map_pin_normal11.ggVisible?'inherit':'hidden';
					me._map_pin_normal11.style.opacity=1;
				}
			}
		}
		me._map_pin_normal11.onclick=function (e) {
			player.openNext("{node21}",player.hotspot.target);
		}
		me._map_pin_normal11.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal11']=true;
			me._map_pin_normal11.logicBlock_scaling();
		}
		me._map_pin_normal11.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal11']=false;
			me._map_pin_normal11.logicBlock_scaling();
		}
		me._map_pin_normal11.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal11']=false;
			me._map_pin_normal11.logicBlock_scaling();
		}
		me._map_pin_normal11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_60.appendChild(me._map_pin_normal11);
		me._image_20.appendChild(me._map_pin_60);
		el=me._map_pin_70=document.createElement('div');
		el.ggId="map_pin_7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 290px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_70.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active10=document.createElement('div');
		els=me._map_pin_active10__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active10';
		hs=basePath + 'images/map_pin_active10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active10'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active10.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active10.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active10.ggParameter.sx = 1.1;
					me._map_pin_active10.ggParameter.sy = 1.1;
					me._map_pin_active10.style[domTransform]=parameterToTransform(me._map_pin_active10.ggParameter);
				}
				else {
					me._map_pin_active10.ggParameter.sx = 1;
					me._map_pin_active10.ggParameter.sy = 1;
					me._map_pin_active10.style[domTransform]=parameterToTransform(me._map_pin_active10.ggParameter);
				}
			}
		}
		me._map_pin_active10.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node23') || 
				(player.getCurrentNode() == 'node24') || 
				(player.getCurrentNode() == 'node25') || 
				(player.getCurrentNode() == 'node26')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node23') || 
				(player.getCurrentNode() != 'node24') || 
				(player.getCurrentNode() != 'node25') || 
				(player.getCurrentNode() != 'node26')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active10.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active10.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active10.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active10.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active10.style.visibility=me._map_pin_active10.ggVisible?'inherit':'hidden';
					me._map_pin_active10.style.opacity=1;
				}
				else if (me._map_pin_active10.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active10.style.visibility="hidden";
					me._map_pin_active10.style.opacity=0;
				}
				else {
					me._map_pin_active10.style.visibility="hidden";
					me._map_pin_active10.style.opacity=0;
				}
			}
		}
		me._map_pin_active10.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active10']=true;
			me._map_pin_active10.logicBlock_scaling();
		}
		me._map_pin_active10.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active10']=false;
			me._map_pin_active10.logicBlock_scaling();
		}
		me._map_pin_active10.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active10']=false;
			me._map_pin_active10.logicBlock_scaling();
		}
		me._map_pin_active10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_70.appendChild(me._map_pin_active10);
		el=me._map_pin_normal10=document.createElement('div');
		els=me._map_pin_normal10__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal10';
		hs=basePath + 'images/map_pin_normal10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal10'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal10.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal10.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal10.ggParameter.sx = 1.1;
					me._map_pin_normal10.ggParameter.sy = 1.1;
					me._map_pin_normal10.style[domTransform]=parameterToTransform(me._map_pin_normal10.ggParameter);
				}
				else {
					me._map_pin_normal10.ggParameter.sx = 1;
					me._map_pin_normal10.ggParameter.sy = 1;
					me._map_pin_normal10.style[domTransform]=parameterToTransform(me._map_pin_normal10.ggParameter);
				}
			}
		}
		me._map_pin_normal10.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node23') || 
				(player.getCurrentNode() == 'node25') || 
				(player.getCurrentNode() == 'node24') || 
				(player.getCurrentNode() == 'node26')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node23') || 
				(player.getCurrentNode() != 'node25') || 
				(player.getCurrentNode() != 'node24') || 
				(player.getCurrentNode() != 'node26')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal10.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal10.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal10.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal10.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal10.style.visibility="hidden";
					me._map_pin_normal10.style.opacity=0;
				}
				else if (me._map_pin_normal10.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal10.style.visibility=me._map_pin_normal10.ggVisible?'inherit':'hidden';
					me._map_pin_normal10.style.opacity=1;
				}
				else {
					me._map_pin_normal10.style.visibility=me._map_pin_normal10.ggVisible?'inherit':'hidden';
					me._map_pin_normal10.style.opacity=1;
				}
			}
		}
		me._map_pin_normal10.onclick=function (e) {
			player.openNext("{node24}",player.hotspot.target);
		}
		me._map_pin_normal10.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal10']=true;
			me._map_pin_normal10.logicBlock_scaling();
		}
		me._map_pin_normal10.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal10']=false;
			me._map_pin_normal10.logicBlock_scaling();
		}
		me._map_pin_normal10.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal10']=false;
			me._map_pin_normal10.logicBlock_scaling();
		}
		me._map_pin_normal10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_70.appendChild(me._map_pin_normal10);
		me._image_20.appendChild(me._map_pin_70);
		el=me._map_pin_80=document.createElement('div');
		el.ggId="map_pin_8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 229px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_80.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_80.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active9=document.createElement('div');
		els=me._map_pin_active9__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active9';
		hs=basePath + 'images/map_pin_active9.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active9.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active9'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active9.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active9.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active9.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active9.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active9.ggParameter.sx = 1.1;
					me._map_pin_active9.ggParameter.sy = 1.1;
					me._map_pin_active9.style[domTransform]=parameterToTransform(me._map_pin_active9.ggParameter);
				}
				else {
					me._map_pin_active9.ggParameter.sx = 1;
					me._map_pin_active9.ggParameter.sy = 1;
					me._map_pin_active9.style[domTransform]=parameterToTransform(me._map_pin_active9.ggParameter);
				}
			}
		}
		me._map_pin_active9.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node27') || 
				(player.getCurrentNode() == 'node28')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node27') || 
				(player.getCurrentNode() != 'node28')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active9.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active9.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active9.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active9.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active9.style.visibility=me._map_pin_active9.ggVisible?'inherit':'hidden';
					me._map_pin_active9.style.opacity=1;
				}
				else if (me._map_pin_active9.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active9.style.visibility="hidden";
					me._map_pin_active9.style.opacity=0;
				}
				else {
					me._map_pin_active9.style.visibility="hidden";
					me._map_pin_active9.style.opacity=0;
				}
			}
		}
		me._map_pin_active9.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active9']=true;
			me._map_pin_active9.logicBlock_scaling();
		}
		me._map_pin_active9.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active9']=false;
			me._map_pin_active9.logicBlock_scaling();
		}
		me._map_pin_active9.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active9']=false;
			me._map_pin_active9.logicBlock_scaling();
		}
		me._map_pin_active9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_80.appendChild(me._map_pin_active9);
		el=me._map_pin_normal9=document.createElement('div');
		els=me._map_pin_normal9__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal9';
		hs=basePath + 'images/map_pin_normal9.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal9.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal9'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal9.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal9.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal9.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal9.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal9.ggParameter.sx = 1.1;
					me._map_pin_normal9.ggParameter.sy = 1.1;
					me._map_pin_normal9.style[domTransform]=parameterToTransform(me._map_pin_normal9.ggParameter);
				}
				else {
					me._map_pin_normal9.ggParameter.sx = 1;
					me._map_pin_normal9.ggParameter.sy = 1;
					me._map_pin_normal9.style[domTransform]=parameterToTransform(me._map_pin_normal9.ggParameter);
				}
			}
		}
		me._map_pin_normal9.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node27') || 
				(player.getCurrentNode() == 'node28')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node27') || 
				(player.getCurrentNode() != 'node28')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal9.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal9.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal9.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal9.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal9.style.visibility="hidden";
					me._map_pin_normal9.style.opacity=0;
				}
				else if (me._map_pin_normal9.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal9.style.visibility=me._map_pin_normal9.ggVisible?'inherit':'hidden';
					me._map_pin_normal9.style.opacity=1;
				}
				else {
					me._map_pin_normal9.style.visibility=me._map_pin_normal9.ggVisible?'inherit':'hidden';
					me._map_pin_normal9.style.opacity=1;
				}
			}
		}
		me._map_pin_normal9.onclick=function (e) {
			player.openNext("{node27}",player.hotspot.target);
		}
		me._map_pin_normal9.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal9']=true;
			me._map_pin_normal9.logicBlock_scaling();
		}
		me._map_pin_normal9.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal9']=false;
			me._map_pin_normal9.logicBlock_scaling();
		}
		me._map_pin_normal9.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal9']=false;
			me._map_pin_normal9.logicBlock_scaling();
		}
		me._map_pin_normal9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_80.appendChild(me._map_pin_normal9);
		me._image_20.appendChild(me._map_pin_80);
		el=me._map_pin_90=document.createElement('div');
		el.ggId="map_pin_9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 162px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_90.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_90.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active8=document.createElement('div');
		els=me._map_pin_active8__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active8';
		hs=basePath + 'images/map_pin_active8.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active8.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active8'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active8.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active8.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active8.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active8.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active8.ggParameter.sx = 1.1;
					me._map_pin_active8.ggParameter.sy = 1.1;
					me._map_pin_active8.style[domTransform]=parameterToTransform(me._map_pin_active8.ggParameter);
				}
				else {
					me._map_pin_active8.ggParameter.sx = 1;
					me._map_pin_active8.ggParameter.sy = 1;
					me._map_pin_active8.style[domTransform]=parameterToTransform(me._map_pin_active8.ggParameter);
				}
			}
		}
		me._map_pin_active8.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node29') || 
				(player.getCurrentNode() == 'node30')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node30') || 
				(player.getCurrentNode() != 'node29')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active8.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active8.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active8.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active8.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active8.style.visibility=me._map_pin_active8.ggVisible?'inherit':'hidden';
					me._map_pin_active8.style.opacity=1;
				}
				else if (me._map_pin_active8.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active8.style.visibility="hidden";
					me._map_pin_active8.style.opacity=0;
				}
				else {
					me._map_pin_active8.style.visibility="hidden";
					me._map_pin_active8.style.opacity=0;
				}
			}
		}
		me._map_pin_active8.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active8']=true;
			me._map_pin_active8.logicBlock_scaling();
		}
		me._map_pin_active8.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active8']=false;
			me._map_pin_active8.logicBlock_scaling();
		}
		me._map_pin_active8.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active8']=false;
			me._map_pin_active8.logicBlock_scaling();
		}
		me._map_pin_active8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_90.appendChild(me._map_pin_active8);
		el=me._map_pin_normal8=document.createElement('div');
		els=me._map_pin_normal8__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal8';
		hs=basePath + 'images/map_pin_normal8.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal8.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal8'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal8.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal8.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal8.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal8.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal8.ggParameter.sx = 1.1;
					me._map_pin_normal8.ggParameter.sy = 1.1;
					me._map_pin_normal8.style[domTransform]=parameterToTransform(me._map_pin_normal8.ggParameter);
				}
				else {
					me._map_pin_normal8.ggParameter.sx = 1;
					me._map_pin_normal8.ggParameter.sy = 1;
					me._map_pin_normal8.style[domTransform]=parameterToTransform(me._map_pin_normal8.ggParameter);
				}
			}
		}
		me._map_pin_normal8.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node29') || 
				(player.getCurrentNode() == 'node30')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node29') || 
				(player.getCurrentNode() != 'node30')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal8.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal8.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal8.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal8.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal8.style.visibility="hidden";
					me._map_pin_normal8.style.opacity=0;
				}
				else if (me._map_pin_normal8.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal8.style.visibility=me._map_pin_normal8.ggVisible?'inherit':'hidden';
					me._map_pin_normal8.style.opacity=1;
				}
				else {
					me._map_pin_normal8.style.visibility=me._map_pin_normal8.ggVisible?'inherit':'hidden';
					me._map_pin_normal8.style.opacity=1;
				}
			}
		}
		me._map_pin_normal8.onclick=function (e) {
			player.openNext("{node30}",player.hotspot.target);
		}
		me._map_pin_normal8.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal8']=true;
			me._map_pin_normal8.logicBlock_scaling();
		}
		me._map_pin_normal8.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal8']=false;
			me._map_pin_normal8.logicBlock_scaling();
		}
		me._map_pin_normal8.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal8']=false;
			me._map_pin_normal8.logicBlock_scaling();
		}
		me._map_pin_normal8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_90.appendChild(me._map_pin_normal8);
		me._image_20.appendChild(me._map_pin_90);
		me._roomdescriptiontextbox0.appendChild(me._image_20);
		me._roomdropdowncontainer0.appendChild(me._roomdescriptiontextbox0);
		me._roomdescriptioncontainermobile.appendChild(me._roomdropdowncontainer0);
		me.__mobile.appendChild(me._roomdescriptioncontainermobile);
		me.__14.appendChild(me.__mobile);
		el=me.__15=document.createElement('div');
		el.ggId="\u6807\u9898\u5bfc\u89c8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._bg0=document.createElement('div');
		els=me._bg0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="bg";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 40px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.705882);';
		hs+='border: 0px solid #878787;';
		hs+='border: 0px solid rgba(135,135,135,0.117647);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(170,170,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 1px 10px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._bg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text=document.createElement('div');
		els=me._text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 30px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text.ggUpdateText=function() {
			var hs="\u5f53\u524d\u5c55\u5385 \u2014\u2014 "+me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text.ggUpdateText();
		el.appendChild(els);
		me._text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text.ggUpdatePosition=function (useTransition) {
		}
		me._bg0.appendChild(me._text);
		me.__15.appendChild(me._bg0);
		me.__14.appendChild(me.__15);
		me.divSkin.appendChild(me.__14);
		el=me.__6=document.createElement('div');
		el.ggId="\u7535\u8111\u7aef\u7528\u6237\u754c\u9762";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__6.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__6.style[domTransition]='';
				if (me.__6.ggCurrentLogicStateVisible == 0) {
					me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
					me.__6.ggVisible=true;
				}
				else if (me.__6.ggCurrentLogicStateVisible == 1) {
					me.__6.style.visibility="hidden";
					me.__6.ggVisible=false;
				}
				else {
					me.__6.style.visibility="hidden";
					me.__6.ggVisible=false;
				}
			}
		}
		me.__6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me.__12=document.createElement('div');
		el.ggId="\u6807\u9898\u5bfc\u89c8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._bg=document.createElement('div');
		els=me._bg__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="bg";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 40px;';
		hs+='background: #871423;';
		hs+='background: rgba(135,20,35,0.705882);';
		hs+='border: 0px solid #878787;';
		hs+='border: 0px solid rgba(135,135,135,0.117647);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(170,170,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 10px 1px 10px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._left_1=document.createElement('div');
		els=me._left_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="left_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 30px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(211,201,11,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u81f4\u656c\u5c81\u6708.\u9010\u68a6\u5148\u884c \u2014\u2014 \u6df1\u5733\u5e02\u8001\u5e72\u90e8\u5e86\u795d\u6df1\u5733\u7ecf\u6d4e\u7279\u533a\u5efa\u7acb40\u5468\u5e74\u4e66\u753b\u6444\u5f71\u5c55";
		el.appendChild(els);
		me._left_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_1.ggUpdatePosition=function (useTransition) {
		}
		me._bg.appendChild(me._left_1);
		el=me.__13=document.createElement('div');
		els=me.__13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="|";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 740px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 30px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(211,201,11,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="|";
		el.appendChild(els);
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		me._bg.appendChild(me.__13);
		el=me._right_1=document.createElement('div');
		els=me._right_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="right_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 780px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 30px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(211,201,11,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._right_1.ggUpdateText=function() {
			var hs="\u5f53\u524d\u5c55\u5385 \u2014\u2014 "+me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._right_1.ggUpdateText();
		el.appendChild(els);
		me._right_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_1.ggUpdatePosition=function (useTransition) {
		}
		me._bg.appendChild(me._right_1);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._bg.appendChild(me._image_1);
		me.__12.appendChild(me._bg);
		me.__6.appendChild(me.__12);
		el=me.__11=document.createElement('div');
		el.ggId="\u5c0f\u5730\u56fe";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._roomdescriptioncontainer=document.createElement('div');
		el.ggId="room-description-container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 330px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 373px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._roomdescriptioncontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roomdescriptioncontainer.ggUpdatePosition=function (useTransition) {
		}
		el=me._roomnametextbox=document.createElement('div');
		els=me._roomnametextbox__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="room-name-textbox";
		el.ggDx=0;
		el.ggDy=-148;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 354px;';
		hs+='height: 54px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 2px solid #ffffff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 9px 10px 9px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u67e5\u770b\u4f4d\u7f6e";
		el.appendChild(els);
		me._roomnametextbox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roomnametextbox.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 4;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._down0=document.createElement('div');
		els=me._down0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4bWw6c3'+
			'BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIwLjkwOCwxMy4wMDdsLTQuOTM4LDUuNDgxbC00LjkzOC01LjQ4MWMtMC40NDMtMC40OTEtMS4xOTktMC41MzEtMS42ODktMC4wODgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ5MSwwLjQ0Mi0wLjUzLDEuMTk5LTAuMDg4LDEuNjg5bDUuODI3LDYuNDY4YzAuMjI2LDAuMjUsMC41NTEsMC4zOTYsMC44ODksMC4zOTZzMC42NjMtMC4xNDYs'+
			'MC44ODktMC4zOTZsNS44MjctNi40NjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDQyLTAuNDkxLDAuNDAyLTEuMjQ4LTAuMDg4LTEuNjg5QzIyLjEwNiwxMi40NzcsMjEuMzUsMTIuNTE3LDIwLjkwOCwxMy4wMDd6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMywxLjgzMS'+
			'00LjM1MywyLjk2LTcuMTQ3LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ2eiIvPgogPC9nPgogPGc+CiAgPHBhdGgg'+
			'c3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgZD0iTTIwLjkwOCwxMy4wMDdsLTQuOTM4LDUuNDgxbC00LjkzOC01LjQ4MWMtMC40NDMtMC40OTEtMS4xOTktMC41MzEtMS42ODktMC4wODgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ5MSwwLjQ0Mi0wLjUzLDEuMTk5LTAuMDg4LDEuNjg5bDUuODI3LDYuNDY4YzAuMjI2LDAuMjUsMC41NTEsMC4zOTYsMC44ODksMC4zOTZzMC42NjMtMC4xNDYsMC44ODktMC4zOTZsNS44MjctNi40NjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDQyLTAuNDkxLDAuNDAyLTEuMjQ4LTAuMDg4LTEuNjg5Qz'+
			'IyLjEwNiwxMi40NzcsMjEuMzUsMTIuNTE3LDIwLjkwOCwxMy4wMDd6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMywxLjgzMS00LjM1MywyLjk2LTcuMTQ3LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._down0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;down0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._down0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4bWw6c3'+
			'BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjAuOTA4LDEzLjAwN2wtNC45MzgsNS40ODFsLTQuOTM4LTUuNDgxYy0wLjQ0My0wLjQ5MS0xLjE5OS0wLjUzMS0xLjY4OS0wLjA4OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDkxLDAuNDQyLTAuNTMsMS4xOTktMC4wODgsMS42ODls'+
			'NS44MjcsNi40NjhjMC4yMjYsMC4yNSwwLjU1MSwwLjM5NiwwLjg4OSwwLjM5NnMwLjY2My0wLjE0NiwwLjg4OS0wLjM5Nmw1LjgyNy02LjQ2OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40NDItMC40OTEsMC40MDItMS4yNDgtMC4wODgtMS42ODlDMjIuMTA2LDEyLjQ3NywyMS4zNSwxMi41MTcsMjAuOTA4LDEzLjAwN3ogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMT'+
			'YsMy41eiBNMjMuMTQ3LDIzLjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2'+
			'LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0yMC45MDgsMTMuMDA3bC00LjkzOCw1LjQ4MWwtNC45MzgtNS40ODFjLTAuNDQzLTAuNDkxLTEuMTk5LTAuNTMxLTEuNjg5LTAuMDg4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40OTEsMC40NDItMC41MywxLjE5OS0wLjA4OCwxLjY4OWw1LjgyNyw2LjQ2OGMwLjIyNiwwLjI1LDAuNT'+
			'UxLDAuMzk2LDAuODg5LDAuMzk2czAuNjYzLTAuMTQ2LDAuODg5LTAuMzk2bDUuODI3LTYuNDY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ0Mi0wLjQ5MSwwLjQwMi0xLjI0OC0wLjA4OC0xLjY4OUMyMi4xMDYsMTIuNDc3LDIxLjM1LDEyLjUxNywyMC45MDgsMTMuMDA3eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ2JiN4ZDsm'+
			'I3hhOyYjeDk7JiN4OTsmI3g5O2MtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMT'+
			'Q3LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._down0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;down0;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._down0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._down0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_loc_text') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._down0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._down0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._down0.style[domTransition]='';
				if (me._down0.ggCurrentLogicStateVisible == 0) {
					me._down0.style.visibility="hidden";
					me._down0.ggVisible=false;
				}
				else {
					me._down0.style.visibility=(Number(me._down0.style.opacity)>0||!me._down0.style.opacity)?'inherit':'hidden';
					me._down0.ggVisible=true;
				}
			}
		}
		me._down0.onclick=function (e) {
			player.setVariableValue('vis_loc_text', true);
		}
		me._down0.onmouseover=function (e) {
			me._down0__img.style.visibility='hidden';
			me._down0__imgo.style.visibility='inherit';
		}
		me._down0.onmouseout=function (e) {
			me._down0__img.style.visibility='inherit';
			me._down0__imgo.style.visibility='hidden';
		}
		me._down0.ggUpdatePosition=function (useTransition) {
		}
		me._roomnametextbox.appendChild(me._down0);
		el=me._up0=document.createElement('div');
		els=me._up0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4bWw6c3'+
			'BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE2LjkxOSwxMC45MjNjLTAuMjI3LTAuMjUxLTAuNTUxLTAuMzk2LTAuODg5LTAuMzk2Yy0wLjMzNywwLTAuNjYzLDAuMTQ1LTAuODg5LDAuMzk2bC01LjgyNyw2LjQ2OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDQyLDAuNDkxLTAuNDAzLDEuMjQ4LDAuMDg4LDEuNjg5YzAuNDkxLDAuNDQyLDEuMjQ3LDAuNDAzLDEuNjg5LTAuMDg4bDQu'+
			'OTM4LTUuNDgxbDQuOTM4LDUuNDgxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIzNiwwLjI2MywwLjU2MywwLjM5NiwwLjg5LDAuMzk2YzAuMjg1LDAsMC41NzEtMC4xMDIsMC44LTAuMzA4YzAuNDkxLTAuNDQxLDAuNTMtMS4xOTgsMC4wODgtMS42ODlMMTYuOTE5LDEwLjkyM3ogTTE2LDMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7JiN4OTsgTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIz'+
			'LjE0NywyMy4xNDZ6Ii8+CiA8L2c+CiA8Zz4KICA8cGF0aCBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiBkPSJNMTYuOTE5LDEwLjkyM2MtMC4yMjctMC4yNTEtMC41NTEtMC4zOTYtMC44ODktMC4zOTZjLTAuMzM3LDAtMC42NjMsMC4xNDUtMC44ODksMC4zOTZsLTUuODI3LDYuNDY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDIsMC40OTEtMC40MDMsMS4yNDgsMC4wODgsMS42ODljMC40OTEsMC40NDIsMS4yNDcsMC40MDMsMS42ODktMC4wODhsNC45MzgtNS40ODFsNC45MzgsNS40ODEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMj'+
			'M2LDAuMjYzLDAuNTYzLDAuMzk2LDAuODksMC4zOTZjMC4yODUsMCwwLjU3MS0wLjEwMiwwLjgtMC4zMDhjMC40OTEtMC40NDEsMC41My0xLjE5OCwwLjA4OC0xLjY4OUwxNi45MTksMTAuOTIzeiBNMTYsMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0'+
			'NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._up0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;up0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._up0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4bWw6c3'+
			'BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMTYuOTE5LDEwLjkyM2MtMC4yMjctMC4yNTEtMC41NTEtMC4zOTYtMC44ODktMC4zOTZjLTAuMzM3LDAtMC42NjMsMC4xNDUtMC44ODksMC4zOTZsLTUuODI3LDYuNDY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDIsMC40OTEtMC40'+
			'MDMsMS4yNDgsMC4wODgsMS42ODljMC40OTEsMC40NDIsMS4yNDcsMC40MDMsMS42ODktMC4wODhsNC45MzgtNS40ODFsNC45MzgsNS40ODEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMjM2LDAuMjYzLDAuNTYzLDAuMzk2LDAuODksMC4zOTZjMC4yODUsMCwwLjU3MS0wLjEwMiwwLjgtMC4zMDhjMC40OTEtMC40NDEsMC41My0xLjE5OCwwLjA4OC0xLjY4OUwxNi45MTksMTAuOTIzeiBNMTYsMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LD'+
			'EyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzEs'+
			'MS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0NnoiLz4KIDwvZz4KIDxnIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTE2LjkxOSwxMC45MjNjLTAuMjI3LTAuMjUxLTAuNTUxLTAuMzk2LTAuODg5LTAuMzk2Yy0wLjMzNywwLTAuNjYzLDAuMTQ1LTAuODg5LDAuMzk2bC01LjgyNyw2LjQ2OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDQyLD'+
			'AuNDkxLTAuNDAzLDEuMjQ4LDAuMDg4LDEuNjg5YzAuNDkxLDAuNDQyLDEuMjQ3LDAuNDAzLDEuNjg5LTAuMDg4bDQuOTM4LTUuNDgxbDQuOTM4LDUuNDgxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIzNiwwLjI2MywwLjU2MywwLjM5NiwwLjg5LDAuMzk2YzAuMjg1LDAsMC41NzEtMC4xMDIsMC44LTAuMzA4YzAuNDkxLTAuNDQxLDAuNTMtMS4xOTgsMC4wODgtMS42ODlMMTYuOTE5LDEwLjkyM3ogTTE2LDMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5'+
			'OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeD'+
			'k7YzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._up0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;up0;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._up0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_loc_text') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._up0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._up0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._up0.style[domTransition]='';
				if (me._up0.ggCurrentLogicStateVisible == 0) {
					me._up0.style.visibility=(Number(me._up0.style.opacity)>0||!me._up0.style.opacity)?'inherit':'hidden';
					me._up0.ggVisible=true;
				}
				else {
					me._up0.style.visibility="hidden";
					me._up0.ggVisible=false;
				}
			}
		}
		me._up0.onclick=function (e) {
			player.setVariableValue('vis_loc_text', false);
		}
		me._up0.onmouseover=function (e) {
			me._up0__img.style.visibility='hidden';
			me._up0__imgo.style.visibility='inherit';
		}
		me._up0.onmouseout=function (e) {
			me._up0__img.style.visibility='inherit';
			me._up0__imgo.style.visibility='hidden';
		}
		me._up0.ggUpdatePosition=function (useTransition) {
		}
		me._roomnametextbox.appendChild(me._up0);
		me._roomdescriptioncontainer.appendChild(me._roomnametextbox);
		el=me._roomdropdowncontainer=document.createElement('div');
		el.ggId="room-dropdown-container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 350px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._roomdropdowncontainer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roomdropdowncontainer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_loc_text') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(player.getVariableValue('vis_loc_text') == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._roomdropdowncontainer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._roomdropdowncontainer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._roomdropdowncontainer.style[domTransition]='';
				if (me._roomdropdowncontainer.ggCurrentLogicStateVisible == 0) {
					me._roomdropdowncontainer.style.visibility=(Number(me._roomdropdowncontainer.style.opacity)>0||!me._roomdropdowncontainer.style.opacity)?'inherit':'hidden';
					me._roomdropdowncontainer.ggVisible=true;
				}
				else if (me._roomdropdowncontainer.ggCurrentLogicStateVisible == 1) {
					me._roomdropdowncontainer.style.visibility="hidden";
					me._roomdropdowncontainer.ggVisible=false;
				}
				else {
					me._roomdropdowncontainer.style.visibility=(Number(me._roomdropdowncontainer.style.opacity)>0||!me._roomdropdowncontainer.style.opacity)?'inherit':'hidden';
					me._roomdropdowncontainer.ggVisible=true;
				}
			}
		}
		me._roomdropdowncontainer.ggUpdatePosition=function (useTransition) {
		}
		el=me._roomdescriptiontextbox=document.createElement('div');
		els=me._roomdescriptiontextbox__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="room-description-textbox";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 350px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 350px;';
		hs+='height: 350px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #ffffff;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 8px 9px 8px 9px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._roomdescriptiontextbox.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roomdescriptiontextbox.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 336px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 336px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_1=document.createElement('div');
		el.ggId="map_pin_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 112px;';
		hs+='position : absolute;';
		hs+='top : 268px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active7=document.createElement('div');
		els=me._map_pin_active7__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active7';
		hs=basePath + 'images/map_pin_active7.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active7.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active7'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active7.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active7.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active7.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active7.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active7.ggParameter.sx = 1.1;
					me._map_pin_active7.ggParameter.sy = 1.1;
					me._map_pin_active7.style[domTransform]=parameterToTransform(me._map_pin_active7.ggParameter);
				}
				else {
					me._map_pin_active7.ggParameter.sx = 1;
					me._map_pin_active7.ggParameter.sy = 1;
					me._map_pin_active7.style[domTransform]=parameterToTransform(me._map_pin_active7.ggParameter);
				}
			}
		}
		me._map_pin_active7.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node2') || 
				(player.getCurrentNode() == 'node1') || 
				(player.getCurrentNode() == 'node3') || 
				(player.getCurrentNode() == 'node4')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node2') || 
				(player.getCurrentNode() != 'node4') || 
				(player.getCurrentNode() != 'node1') || 
				(player.getCurrentNode() != 'node3')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active7.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active7.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active7.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active7.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active7.style.visibility=me._map_pin_active7.ggVisible?'inherit':'hidden';
					me._map_pin_active7.style.opacity=1;
				}
				else if (me._map_pin_active7.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active7.style.visibility="hidden";
					me._map_pin_active7.style.opacity=0;
				}
				else {
					me._map_pin_active7.style.visibility="hidden";
					me._map_pin_active7.style.opacity=0;
				}
			}
		}
		me._map_pin_active7.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active7']=true;
			me._map_pin_active7.logicBlock_scaling();
		}
		me._map_pin_active7.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active7']=false;
			me._map_pin_active7.logicBlock_scaling();
		}
		me._map_pin_active7.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active7']=false;
			me._map_pin_active7.logicBlock_scaling();
		}
		me._map_pin_active7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_1.appendChild(me._map_pin_active7);
		el=me._map_pin_normal7=document.createElement('div');
		els=me._map_pin_normal7__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal7';
		hs=basePath + 'images/map_pin_normal7.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal7.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal7'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal7.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal7.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal7.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal7.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal7.ggParameter.sx = 1.1;
					me._map_pin_normal7.ggParameter.sy = 1.1;
					me._map_pin_normal7.style[domTransform]=parameterToTransform(me._map_pin_normal7.ggParameter);
				}
				else {
					me._map_pin_normal7.ggParameter.sx = 1;
					me._map_pin_normal7.ggParameter.sy = 1;
					me._map_pin_normal7.style[domTransform]=parameterToTransform(me._map_pin_normal7.ggParameter);
				}
			}
		}
		me._map_pin_normal7.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node2') || 
				(player.getCurrentNode() == 'node1') || 
				(player.getCurrentNode() == 'node3') || 
				(player.getCurrentNode() == 'node4')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node2') || 
				(player.getCurrentNode() != 'node4') || 
				(player.getCurrentNode() != 'node1') || 
				(player.getCurrentNode() != 'node3')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal7.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal7.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal7.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal7.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal7.style.visibility="hidden";
					me._map_pin_normal7.style.opacity=0;
				}
				else if (me._map_pin_normal7.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal7.style.visibility=me._map_pin_normal7.ggVisible?'inherit':'hidden';
					me._map_pin_normal7.style.opacity=1;
				}
				else {
					me._map_pin_normal7.style.visibility=me._map_pin_normal7.ggVisible?'inherit':'hidden';
					me._map_pin_normal7.style.opacity=1;
				}
			}
		}
		me._map_pin_normal7.onclick=function (e) {
			player.openNext("{node1}",player.hotspot.target);
		}
		me._map_pin_normal7.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal7']=true;
			me._map_pin_normal7.logicBlock_scaling();
		}
		me._map_pin_normal7.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal7']=false;
			me._map_pin_normal7.logicBlock_scaling();
		}
		me._map_pin_normal7.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal7']=false;
			me._map_pin_normal7.logicBlock_scaling();
		}
		me._map_pin_normal7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_1.appendChild(me._map_pin_normal7);
		me._image_2.appendChild(me._map_pin_1);
		el=me._map_pin_2=document.createElement('div');
		el.ggId="map_pin_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 213px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active6=document.createElement('div');
		els=me._map_pin_active6__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active6';
		hs=basePath + 'images/map_pin_active6.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active6.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active6'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active6.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active6.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active6.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active6.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active6.ggParameter.sx = 1.1;
					me._map_pin_active6.ggParameter.sy = 1.1;
					me._map_pin_active6.style[domTransform]=parameterToTransform(me._map_pin_active6.ggParameter);
				}
				else {
					me._map_pin_active6.ggParameter.sx = 1;
					me._map_pin_active6.ggParameter.sy = 1;
					me._map_pin_active6.style[domTransform]=parameterToTransform(me._map_pin_active6.ggParameter);
				}
			}
		}
		me._map_pin_active6.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node9') || 
				(player.getCurrentNode() == 'node5') || 
				(player.getCurrentNode() == 'node6') || 
				(player.getCurrentNode() == 'node7') || 
				(player.getCurrentNode() == 'node8')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node9') || 
				(player.getCurrentNode() != 'node5') || 
				(player.getCurrentNode() != 'node6') || 
				(player.getCurrentNode() != 'node7') || 
				(player.getCurrentNode() != 'node8')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active6.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active6.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active6.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active6.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active6.style.visibility=me._map_pin_active6.ggVisible?'inherit':'hidden';
					me._map_pin_active6.style.opacity=1;
				}
				else if (me._map_pin_active6.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active6.style.visibility="hidden";
					me._map_pin_active6.style.opacity=0;
				}
				else {
					me._map_pin_active6.style.visibility="hidden";
					me._map_pin_active6.style.opacity=0;
				}
			}
		}
		me._map_pin_active6.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active6']=true;
			me._map_pin_active6.logicBlock_scaling();
		}
		me._map_pin_active6.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active6']=false;
			me._map_pin_active6.logicBlock_scaling();
		}
		me._map_pin_active6.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active6']=false;
			me._map_pin_active6.logicBlock_scaling();
		}
		me._map_pin_active6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_2.appendChild(me._map_pin_active6);
		el=me._map_pin_normal6=document.createElement('div');
		els=me._map_pin_normal6__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal6';
		hs=basePath + 'images/map_pin_normal6.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal6.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal6'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal6.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal6.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal6.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal6.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal6.ggParameter.sx = 1.1;
					me._map_pin_normal6.ggParameter.sy = 1.1;
					me._map_pin_normal6.style[domTransform]=parameterToTransform(me._map_pin_normal6.ggParameter);
				}
				else {
					me._map_pin_normal6.ggParameter.sx = 1;
					me._map_pin_normal6.ggParameter.sy = 1;
					me._map_pin_normal6.style[domTransform]=parameterToTransform(me._map_pin_normal6.ggParameter);
				}
			}
		}
		me._map_pin_normal6.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node9') || 
				(player.getCurrentNode() == 'node5') || 
				(player.getCurrentNode() == 'node6') || 
				(player.getCurrentNode() == 'node7') || 
				(player.getCurrentNode() == 'node8')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node9') || 
				(player.getCurrentNode() != 'node5') || 
				(player.getCurrentNode() != 'node6') || 
				(player.getCurrentNode() != 'node8') || 
				(player.getCurrentNode() != 'node7')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal6.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal6.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal6.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal6.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal6.style.visibility="hidden";
					me._map_pin_normal6.style.opacity=0;
				}
				else if (me._map_pin_normal6.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal6.style.visibility=me._map_pin_normal6.ggVisible?'inherit':'hidden';
					me._map_pin_normal6.style.opacity=1;
				}
				else {
					me._map_pin_normal6.style.visibility=me._map_pin_normal6.ggVisible?'inherit':'hidden';
					me._map_pin_normal6.style.opacity=1;
				}
			}
		}
		me._map_pin_normal6.onclick=function (e) {
			player.openNext("{node9}",player.hotspot.target);
		}
		me._map_pin_normal6.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal6']=true;
			me._map_pin_normal6.logicBlock_scaling();
		}
		me._map_pin_normal6.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal6']=false;
			me._map_pin_normal6.logicBlock_scaling();
		}
		me._map_pin_normal6.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal6']=false;
			me._map_pin_normal6.logicBlock_scaling();
		}
		me._map_pin_normal6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_2.appendChild(me._map_pin_normal6);
		me._image_2.appendChild(me._map_pin_2);
		el=me._map_pin_3=document.createElement('div');
		el.ggId="map_pin_3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 144px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active5=document.createElement('div');
		els=me._map_pin_active5__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active5';
		hs=basePath + 'images/map_pin_active5.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active5'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active5.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active5.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active5.ggParameter.sx = 1.1;
					me._map_pin_active5.ggParameter.sy = 1.1;
					me._map_pin_active5.style[domTransform]=parameterToTransform(me._map_pin_active5.ggParameter);
				}
				else {
					me._map_pin_active5.ggParameter.sx = 1;
					me._map_pin_active5.ggParameter.sy = 1;
					me._map_pin_active5.style[domTransform]=parameterToTransform(me._map_pin_active5.ggParameter);
				}
			}
		}
		me._map_pin_active5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node11') || 
				(player.getCurrentNode() == 'node10') || 
				(player.getCurrentNode() == 'node12')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node11') || 
				(player.getCurrentNode() != 'node12') || 
				(player.getCurrentNode() != 'node10')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active5.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active5.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active5.style.visibility=me._map_pin_active5.ggVisible?'inherit':'hidden';
					me._map_pin_active5.style.opacity=1;
				}
				else if (me._map_pin_active5.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active5.style.visibility="hidden";
					me._map_pin_active5.style.opacity=0;
				}
				else {
					me._map_pin_active5.style.visibility="hidden";
					me._map_pin_active5.style.opacity=0;
				}
			}
		}
		me._map_pin_active5.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active5']=true;
			me._map_pin_active5.logicBlock_scaling();
		}
		me._map_pin_active5.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active5']=false;
			me._map_pin_active5.logicBlock_scaling();
		}
		me._map_pin_active5.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active5']=false;
			me._map_pin_active5.logicBlock_scaling();
		}
		me._map_pin_active5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_3.appendChild(me._map_pin_active5);
		el=me._map_pin_normal5=document.createElement('div');
		els=me._map_pin_normal5__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal5';
		hs=basePath + 'images/map_pin_normal5.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal5'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal5.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal5.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal5.ggParameter.sx = 1.1;
					me._map_pin_normal5.ggParameter.sy = 1.1;
					me._map_pin_normal5.style[domTransform]=parameterToTransform(me._map_pin_normal5.ggParameter);
				}
				else {
					me._map_pin_normal5.ggParameter.sx = 1;
					me._map_pin_normal5.ggParameter.sy = 1;
					me._map_pin_normal5.style[domTransform]=parameterToTransform(me._map_pin_normal5.ggParameter);
				}
			}
		}
		me._map_pin_normal5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node12') || 
				(player.getCurrentNode() == 'node10') || 
				(player.getCurrentNode() == 'node11')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node11') || 
				(player.getCurrentNode() != 'node12') || 
				(player.getCurrentNode() != 'node10')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal5.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal5.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal5.style.visibility="hidden";
					me._map_pin_normal5.style.opacity=0;
				}
				else if (me._map_pin_normal5.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal5.style.visibility=me._map_pin_normal5.ggVisible?'inherit':'hidden';
					me._map_pin_normal5.style.opacity=1;
				}
				else {
					me._map_pin_normal5.style.visibility=me._map_pin_normal5.ggVisible?'inherit':'hidden';
					me._map_pin_normal5.style.opacity=1;
				}
			}
		}
		me._map_pin_normal5.onclick=function (e) {
			player.openNext("{node11}",player.hotspot.target);
		}
		me._map_pin_normal5.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal5']=true;
			me._map_pin_normal5.logicBlock_scaling();
		}
		me._map_pin_normal5.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal5']=false;
			me._map_pin_normal5.logicBlock_scaling();
		}
		me._map_pin_normal5.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal5']=false;
			me._map_pin_normal5.logicBlock_scaling();
		}
		me._map_pin_normal5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_3.appendChild(me._map_pin_normal5);
		me._image_2.appendChild(me._map_pin_3);
		el=me._map_pin_4=document.createElement('div');
		el.ggId="map_pin_4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 111px;';
		hs+='position : absolute;';
		hs+='top : 106px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active4=document.createElement('div');
		els=me._map_pin_active4__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active4';
		hs=basePath + 'images/map_pin_active4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active4'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active4.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active4.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active4.ggParameter.sx = 1.1;
					me._map_pin_active4.ggParameter.sy = 1.1;
					me._map_pin_active4.style[domTransform]=parameterToTransform(me._map_pin_active4.ggParameter);
				}
				else {
					me._map_pin_active4.ggParameter.sx = 1;
					me._map_pin_active4.ggParameter.sy = 1;
					me._map_pin_active4.style[domTransform]=parameterToTransform(me._map_pin_active4.ggParameter);
				}
			}
		}
		me._map_pin_active4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node13') || 
				(player.getCurrentNode() == 'node14') || 
				(player.getCurrentNode() == 'node15')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node13') || 
				(player.getCurrentNode() != 'node15') || 
				(player.getCurrentNode() != 'node14')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active4.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active4.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active4.style.visibility=me._map_pin_active4.ggVisible?'inherit':'hidden';
					me._map_pin_active4.style.opacity=1;
				}
				else if (me._map_pin_active4.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active4.style.visibility="hidden";
					me._map_pin_active4.style.opacity=0;
				}
				else {
					me._map_pin_active4.style.visibility="hidden";
					me._map_pin_active4.style.opacity=0;
				}
			}
		}
		me._map_pin_active4.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active4']=true;
			me._map_pin_active4.logicBlock_scaling();
		}
		me._map_pin_active4.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active4']=false;
			me._map_pin_active4.logicBlock_scaling();
		}
		me._map_pin_active4.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active4']=false;
			me._map_pin_active4.logicBlock_scaling();
		}
		me._map_pin_active4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_4.appendChild(me._map_pin_active4);
		el=me._map_pin_normal4=document.createElement('div');
		els=me._map_pin_normal4__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal4';
		hs=basePath + 'images/map_pin_normal4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal4'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal4.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal4.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal4.ggParameter.sx = 1.1;
					me._map_pin_normal4.ggParameter.sy = 1.1;
					me._map_pin_normal4.style[domTransform]=parameterToTransform(me._map_pin_normal4.ggParameter);
				}
				else {
					me._map_pin_normal4.ggParameter.sx = 1;
					me._map_pin_normal4.ggParameter.sy = 1;
					me._map_pin_normal4.style[domTransform]=parameterToTransform(me._map_pin_normal4.ggParameter);
				}
			}
		}
		me._map_pin_normal4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node13') || 
				(player.getCurrentNode() == 'node14') || 
				(player.getCurrentNode() == 'node15')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node13') || 
				(player.getCurrentNode() != 'node14') || 
				(player.getCurrentNode() != 'node15')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal4.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal4.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal4.style.visibility="hidden";
					me._map_pin_normal4.style.opacity=0;
				}
				else if (me._map_pin_normal4.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal4.style.visibility=me._map_pin_normal4.ggVisible?'inherit':'hidden';
					me._map_pin_normal4.style.opacity=1;
				}
				else {
					me._map_pin_normal4.style.visibility=me._map_pin_normal4.ggVisible?'inherit':'hidden';
					me._map_pin_normal4.style.opacity=1;
				}
			}
		}
		me._map_pin_normal4.onclick=function (e) {
			player.openNext("{node14}",player.hotspot.target);
		}
		me._map_pin_normal4.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal4']=true;
			me._map_pin_normal4.logicBlock_scaling();
		}
		me._map_pin_normal4.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal4']=false;
			me._map_pin_normal4.logicBlock_scaling();
		}
		me._map_pin_normal4.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal4']=false;
			me._map_pin_normal4.logicBlock_scaling();
		}
		me._map_pin_normal4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_4.appendChild(me._map_pin_normal4);
		me._image_2.appendChild(me._map_pin_4);
		el=me._map_pin_5=document.createElement('div');
		el.ggId="map_pin_5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 203px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active3=document.createElement('div');
		els=me._map_pin_active3__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active3';
		hs=basePath + 'images/map_pin_active3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active3'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active3.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active3.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active3.ggParameter.sx = 1.1;
					me._map_pin_active3.ggParameter.sy = 1.1;
					me._map_pin_active3.style[domTransform]=parameterToTransform(me._map_pin_active3.ggParameter);
				}
				else {
					me._map_pin_active3.ggParameter.sx = 1;
					me._map_pin_active3.ggParameter.sy = 1;
					me._map_pin_active3.style[domTransform]=parameterToTransform(me._map_pin_active3.ggParameter);
				}
			}
		}
		me._map_pin_active3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node16') || 
				(player.getCurrentNode() == 'node17') || 
				(player.getCurrentNode() == 'node18') || 
				(player.getCurrentNode() == 'node19')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node16') || 
				(player.getCurrentNode() != 'node17') || 
				(player.getCurrentNode() != 'node18') || 
				(player.getCurrentNode() != 'node19')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active3.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active3.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active3.style.visibility=me._map_pin_active3.ggVisible?'inherit':'hidden';
					me._map_pin_active3.style.opacity=1;
				}
				else if (me._map_pin_active3.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active3.style.visibility="hidden";
					me._map_pin_active3.style.opacity=0;
				}
				else {
					me._map_pin_active3.style.visibility="hidden";
					me._map_pin_active3.style.opacity=0;
				}
			}
		}
		me._map_pin_active3.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active3']=true;
			me._map_pin_active3.logicBlock_scaling();
		}
		me._map_pin_active3.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active3']=false;
			me._map_pin_active3.logicBlock_scaling();
		}
		me._map_pin_active3.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active3']=false;
			me._map_pin_active3.logicBlock_scaling();
		}
		me._map_pin_active3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_5.appendChild(me._map_pin_active3);
		el=me._map_pin_normal3=document.createElement('div');
		els=me._map_pin_normal3__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal3';
		hs=basePath + 'images/map_pin_normal3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal3'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal3.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal3.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal3.ggParameter.sx = 1.1;
					me._map_pin_normal3.ggParameter.sy = 1.1;
					me._map_pin_normal3.style[domTransform]=parameterToTransform(me._map_pin_normal3.ggParameter);
				}
				else {
					me._map_pin_normal3.ggParameter.sx = 1;
					me._map_pin_normal3.ggParameter.sy = 1;
					me._map_pin_normal3.style[domTransform]=parameterToTransform(me._map_pin_normal3.ggParameter);
				}
			}
		}
		me._map_pin_normal3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node16') || 
				(player.getCurrentNode() == 'node17') || 
				(player.getCurrentNode() == 'node19') || 
				(player.getCurrentNode() == 'node18')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node16') || 
				(player.getCurrentNode() != 'node17') || 
				(player.getCurrentNode() != 'node19') || 
				(player.getCurrentNode() != 'node18')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal3.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal3.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal3.style.visibility="hidden";
					me._map_pin_normal3.style.opacity=0;
				}
				else if (me._map_pin_normal3.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal3.style.visibility=me._map_pin_normal3.ggVisible?'inherit':'hidden';
					me._map_pin_normal3.style.opacity=1;
				}
				else {
					me._map_pin_normal3.style.visibility=me._map_pin_normal3.ggVisible?'inherit':'hidden';
					me._map_pin_normal3.style.opacity=1;
				}
			}
		}
		me._map_pin_normal3.onclick=function (e) {
			player.openNext("{node18}",player.hotspot.target);
		}
		me._map_pin_normal3.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal3']=true;
			me._map_pin_normal3.logicBlock_scaling();
		}
		me._map_pin_normal3.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal3']=false;
			me._map_pin_normal3.logicBlock_scaling();
		}
		me._map_pin_normal3.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal3']=false;
			me._map_pin_normal3.logicBlock_scaling();
		}
		me._map_pin_normal3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_5.appendChild(me._map_pin_normal3);
		me._image_2.appendChild(me._map_pin_5);
		el=me._map_pin_6=document.createElement('div');
		el.ggId="map_pin_6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 228px;';
		hs+='position : absolute;';
		hs+='top : 273px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active2=document.createElement('div');
		els=me._map_pin_active2__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active2';
		hs=basePath + 'images/map_pin_active2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active2'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active2.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active2.ggParameter.sx = 1.1;
					me._map_pin_active2.ggParameter.sy = 1.1;
					me._map_pin_active2.style[domTransform]=parameterToTransform(me._map_pin_active2.ggParameter);
				}
				else {
					me._map_pin_active2.ggParameter.sx = 1;
					me._map_pin_active2.ggParameter.sy = 1;
					me._map_pin_active2.style[domTransform]=parameterToTransform(me._map_pin_active2.ggParameter);
				}
			}
		}
		me._map_pin_active2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node20') || 
				(player.getCurrentNode() == 'node21') || 
				(player.getCurrentNode() == 'node22')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node22') || 
				(player.getCurrentNode() != 'node21') || 
				(player.getCurrentNode() != 'node20')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active2.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active2.style.visibility=me._map_pin_active2.ggVisible?'inherit':'hidden';
					me._map_pin_active2.style.opacity=1;
				}
				else if (me._map_pin_active2.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active2.style.visibility="hidden";
					me._map_pin_active2.style.opacity=0;
				}
				else {
					me._map_pin_active2.style.visibility="hidden";
					me._map_pin_active2.style.opacity=0;
				}
			}
		}
		me._map_pin_active2.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active2']=true;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active2']=false;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active2']=false;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_6.appendChild(me._map_pin_active2);
		el=me._map_pin_normal2=document.createElement('div');
		els=me._map_pin_normal2__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal2';
		hs=basePath + 'images/map_pin_normal2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal2'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal2.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal2.ggParameter.sx = 1.1;
					me._map_pin_normal2.ggParameter.sy = 1.1;
					me._map_pin_normal2.style[domTransform]=parameterToTransform(me._map_pin_normal2.ggParameter);
				}
				else {
					me._map_pin_normal2.ggParameter.sx = 1;
					me._map_pin_normal2.ggParameter.sy = 1;
					me._map_pin_normal2.style[domTransform]=parameterToTransform(me._map_pin_normal2.ggParameter);
				}
			}
		}
		me._map_pin_normal2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node20') || 
				(player.getCurrentNode() == 'node21') || 
				(player.getCurrentNode() == 'node22')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node20') || 
				(player.getCurrentNode() != 'node21') || 
				(player.getCurrentNode() != 'node22')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal2.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal2.style.visibility="hidden";
					me._map_pin_normal2.style.opacity=0;
				}
				else if (me._map_pin_normal2.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal2.style.visibility=me._map_pin_normal2.ggVisible?'inherit':'hidden';
					me._map_pin_normal2.style.opacity=1;
				}
				else {
					me._map_pin_normal2.style.visibility=me._map_pin_normal2.ggVisible?'inherit':'hidden';
					me._map_pin_normal2.style.opacity=1;
				}
			}
		}
		me._map_pin_normal2.onclick=function (e) {
			player.openNext("{node21}",player.hotspot.target);
		}
		me._map_pin_normal2.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal2']=true;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal2']=false;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal2']=false;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_6.appendChild(me._map_pin_normal2);
		me._image_2.appendChild(me._map_pin_6);
		el=me._map_pin_7=document.createElement('div');
		el.ggId="map_pin_7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 290px;';
		hs+='position : absolute;';
		hs+='top : 130px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active1=document.createElement('div');
		els=me._map_pin_active1__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active1';
		hs=basePath + 'images/map_pin_active1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active1'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active1.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active1.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active1.ggParameter.sx = 1.1;
					me._map_pin_active1.ggParameter.sy = 1.1;
					me._map_pin_active1.style[domTransform]=parameterToTransform(me._map_pin_active1.ggParameter);
				}
				else {
					me._map_pin_active1.ggParameter.sx = 1;
					me._map_pin_active1.ggParameter.sy = 1;
					me._map_pin_active1.style[domTransform]=parameterToTransform(me._map_pin_active1.ggParameter);
				}
			}
		}
		me._map_pin_active1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node23') || 
				(player.getCurrentNode() == 'node24') || 
				(player.getCurrentNode() == 'node25') || 
				(player.getCurrentNode() == 'node26')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node23') || 
				(player.getCurrentNode() != 'node24') || 
				(player.getCurrentNode() != 'node25') || 
				(player.getCurrentNode() != 'node26')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active1.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active1.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active1.style.visibility=me._map_pin_active1.ggVisible?'inherit':'hidden';
					me._map_pin_active1.style.opacity=1;
				}
				else if (me._map_pin_active1.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active1.style.visibility="hidden";
					me._map_pin_active1.style.opacity=0;
				}
				else {
					me._map_pin_active1.style.visibility="hidden";
					me._map_pin_active1.style.opacity=0;
				}
			}
		}
		me._map_pin_active1.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active1']=true;
			me._map_pin_active1.logicBlock_scaling();
		}
		me._map_pin_active1.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active1']=false;
			me._map_pin_active1.logicBlock_scaling();
		}
		me._map_pin_active1.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active1']=false;
			me._map_pin_active1.logicBlock_scaling();
		}
		me._map_pin_active1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_7.appendChild(me._map_pin_active1);
		el=me._map_pin_normal1=document.createElement('div');
		els=me._map_pin_normal1__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal1';
		hs=basePath + 'images/map_pin_normal1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal1'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal1.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal1.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal1.ggParameter.sx = 1.1;
					me._map_pin_normal1.ggParameter.sy = 1.1;
					me._map_pin_normal1.style[domTransform]=parameterToTransform(me._map_pin_normal1.ggParameter);
				}
				else {
					me._map_pin_normal1.ggParameter.sx = 1;
					me._map_pin_normal1.ggParameter.sy = 1;
					me._map_pin_normal1.style[domTransform]=parameterToTransform(me._map_pin_normal1.ggParameter);
				}
			}
		}
		me._map_pin_normal1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node23') || 
				(player.getCurrentNode() == 'node25') || 
				(player.getCurrentNode() == 'node24') || 
				(player.getCurrentNode() == 'node26')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node23') || 
				(player.getCurrentNode() != 'node25') || 
				(player.getCurrentNode() != 'node24') || 
				(player.getCurrentNode() != 'node26')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal1.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal1.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal1.style.visibility="hidden";
					me._map_pin_normal1.style.opacity=0;
				}
				else if (me._map_pin_normal1.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal1.style.visibility=me._map_pin_normal1.ggVisible?'inherit':'hidden';
					me._map_pin_normal1.style.opacity=1;
				}
				else {
					me._map_pin_normal1.style.visibility=me._map_pin_normal1.ggVisible?'inherit':'hidden';
					me._map_pin_normal1.style.opacity=1;
				}
			}
		}
		me._map_pin_normal1.onclick=function (e) {
			player.openNext("{node24}",player.hotspot.target);
		}
		me._map_pin_normal1.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal1']=true;
			me._map_pin_normal1.logicBlock_scaling();
		}
		me._map_pin_normal1.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal1']=false;
			me._map_pin_normal1.logicBlock_scaling();
		}
		me._map_pin_normal1.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal1']=false;
			me._map_pin_normal1.logicBlock_scaling();
		}
		me._map_pin_normal1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_7.appendChild(me._map_pin_normal1);
		me._image_2.appendChild(me._map_pin_7);
		el=me._map_pin_8=document.createElement('div');
		el.ggId="map_pin_8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 229px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active0=document.createElement('div');
		els=me._map_pin_active0__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active0';
		hs=basePath + 'images/map_pin_active0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active0'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active0.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active0.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active0.ggParameter.sx = 1.1;
					me._map_pin_active0.ggParameter.sy = 1.1;
					me._map_pin_active0.style[domTransform]=parameterToTransform(me._map_pin_active0.ggParameter);
				}
				else {
					me._map_pin_active0.ggParameter.sx = 1;
					me._map_pin_active0.ggParameter.sy = 1;
					me._map_pin_active0.style[domTransform]=parameterToTransform(me._map_pin_active0.ggParameter);
				}
			}
		}
		me._map_pin_active0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node27') || 
				(player.getCurrentNode() == 'node28')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node27') || 
				(player.getCurrentNode() != 'node28')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active0.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active0.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active0.style.visibility=me._map_pin_active0.ggVisible?'inherit':'hidden';
					me._map_pin_active0.style.opacity=1;
				}
				else if (me._map_pin_active0.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active0.style.visibility="hidden";
					me._map_pin_active0.style.opacity=0;
				}
				else {
					me._map_pin_active0.style.visibility="hidden";
					me._map_pin_active0.style.opacity=0;
				}
			}
		}
		me._map_pin_active0.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active0']=true;
			me._map_pin_active0.logicBlock_scaling();
		}
		me._map_pin_active0.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active0']=false;
			me._map_pin_active0.logicBlock_scaling();
		}
		me._map_pin_active0.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active0']=false;
			me._map_pin_active0.logicBlock_scaling();
		}
		me._map_pin_active0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_8.appendChild(me._map_pin_active0);
		el=me._map_pin_normal0=document.createElement('div');
		els=me._map_pin_normal0__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal0';
		hs=basePath + 'images/map_pin_normal0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal0.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal0'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal0.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal0.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal0.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal0.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal0.ggParameter.sx = 1.1;
					me._map_pin_normal0.ggParameter.sy = 1.1;
					me._map_pin_normal0.style[domTransform]=parameterToTransform(me._map_pin_normal0.ggParameter);
				}
				else {
					me._map_pin_normal0.ggParameter.sx = 1;
					me._map_pin_normal0.ggParameter.sy = 1;
					me._map_pin_normal0.style[domTransform]=parameterToTransform(me._map_pin_normal0.ggParameter);
				}
			}
		}
		me._map_pin_normal0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node27') || 
				(player.getCurrentNode() == 'node28')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node27') || 
				(player.getCurrentNode() != 'node28')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal0.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal0.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal0.style.visibility="hidden";
					me._map_pin_normal0.style.opacity=0;
				}
				else if (me._map_pin_normal0.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal0.style.visibility=me._map_pin_normal0.ggVisible?'inherit':'hidden';
					me._map_pin_normal0.style.opacity=1;
				}
				else {
					me._map_pin_normal0.style.visibility=me._map_pin_normal0.ggVisible?'inherit':'hidden';
					me._map_pin_normal0.style.opacity=1;
				}
			}
		}
		me._map_pin_normal0.onclick=function (e) {
			player.openNext("{node27}",player.hotspot.target);
		}
		me._map_pin_normal0.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal0']=true;
			me._map_pin_normal0.logicBlock_scaling();
		}
		me._map_pin_normal0.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal0']=false;
			me._map_pin_normal0.logicBlock_scaling();
		}
		me._map_pin_normal0.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal0']=false;
			me._map_pin_normal0.logicBlock_scaling();
		}
		me._map_pin_normal0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_8.appendChild(me._map_pin_normal0);
		me._image_2.appendChild(me._map_pin_8);
		el=me._map_pin_9=document.createElement('div');
		el.ggId="map_pin_9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 162px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_pin_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_9.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs=basePath + 'images/map_pin_active.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_active'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style[domTransform]=parameterToTransform(me._map_pin_active.ggParameter);
				}
			}
		}
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node29') || 
				(player.getCurrentNode() == 'node30')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node30') || 
				(player.getCurrentNode() != 'node29')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else if (me._map_pin_active.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_active.style.visibility="hidden";
					me._map_pin_active.style.opacity=0;
				}
				else {
					me._map_pin_active.style.visibility="hidden";
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ontouchend=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_9.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs=basePath + 'images/map_pin_normal.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -10px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['map_pin_normal'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style[domTransform]=parameterToTransform(me._map_pin_normal.ggParameter);
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getCurrentNode() == 'node29') || 
				(player.getCurrentNode() == 'node30')
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getCurrentNode() != 'node29') || 
				(player.getCurrentNode() != 'node30')
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style[domTransition]='' + cssPrefix + 'transform 200ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_normal.style.visibility="hidden";
					me._map_pin_normal.style.opacity=0;
				}
				else if (me._map_pin_normal.ggCurrentLogicStateAlpha == 1) {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.onclick=function (e) {
			player.openNext("{node30}",player.hotspot.target);
		}
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ontouchend=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._map_pin_9.appendChild(me._map_pin_normal);
		me._image_2.appendChild(me._map_pin_9);
		me._roomdescriptiontextbox.appendChild(me._image_2);
		me._roomdropdowncontainer.appendChild(me._roomdescriptiontextbox);
		me._roomdescriptioncontainer.appendChild(me._roomdropdowncontainer);
		me.__11.appendChild(me._roomdescriptioncontainer);
		me.__6.appendChild(me.__11);
		el=me._ui0=document.createElement('div');
		el.ggId="UI\u4ea4\u4e92\uff08\u5907\u7528\uff09";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ui0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ui0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDx=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 258px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 258px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._translate=document.createElement('div');
		el.ggId="translate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._translate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._translate.ggUpdatePosition=function (useTransition) {
		}
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMC4wMDMgMzAwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLj'+
			'AwMyAzMDAuMDAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE1MCwwQzY3LjE1OSwwLDAuMDAxLDY3LjE1OSwwLjAwMSwxNTBjMCw4Mi44MzgsNjcuMTU3LDE1MC4wMDMsMTQ5Ljk5NywxNTAuMDAzUzMwMC4wMDIsMjMyLjgzOCwzMDAuMDAyLDE1MA0KCQkJQzMwMC4wMDIsNjcuMTU5LDIzMi44NDIsMCwxNTAsMHogTTIxNy42ODUsMTg5Ljc5NGMtNS40Nyw1LjQ2Ny0xNC4zMzgsNS40Ny0xOS44MSwwbC00OC4yNi00OC4yN2wtNDguNTIyLDQ4LjUxNg0KCQkJYy01LjQ2Nyw1LjQ2Ny0xNC4zMzgsNS40Ny0xOS44MSwwYy0yLjczMS0yLjczOS00LjA5OC02'+
			'LjMyMS00LjA5OC05LjkwNXMxLjM2Ny03LjE2Niw0LjEwMy05Ljg5N2w1Ni4yOTItNTYuMjk3DQoJCQljMC41MzktMC44MzgsMS4xNTctMS42MzcsMS44ODgtMi4zNjhjMi43OTYtMi43OTYsNi40NzYtNC4xNDIsMTAuMTQ2LTQuMDc3YzMuNjYyLTAuMDYyLDcuMzQ4LDEuMjgxLDEwLjE0MSw0LjA4DQoJCQljMC43MzQsMC43MjksMS4zNDksMS41MjgsMS44ODYsMi4zNjVsNTYuMDQzLDU2LjA0M0MyMjMuMTUyLDE3NS40NTQsMjIzLjE1NiwxODQuMzIyLDIxNy42ODUsMTg5Ljc5NHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg'+
			'0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._up__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;up;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMC4wMDMgMzAwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLj'+
			'AwMyAzMDAuMDAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE1MCwwQzY3LjE1OSwwLDAuMDAxLDY3LjE1OSwwLjAwMSwxNTBjMCw4Mi44MzgsNjcuMTU3LDE1MC4wMDMsMTQ5Ljk5NywxNTAuMDAzUzMwMC4wMDIsMjMyLjgzOCwzMDAuMDAyLDE1MA0KCQkJQzMwMC4wMDIsNjcuMTU5LDIzMi44NDIsMCwxNTAsMHogTTIxNy42ODUsMTg5Ljc5NGMtNS40Nyw1LjQ2Ny0xNC4zMzgsNS40Ny0xOS44MSwwbC00OC4yNi00OC4yN2wtNDguNTIyLDQ4LjUxNg0KCQkJYy01LjQ2Nyw1LjQ2Ny0xNC4zMzgsNS40Ny0xOS44MSwwYy0yLjczMS0yLjczOS00LjA5OC02'+
			'LjMyMS00LjA5OC05LjkwNXMxLjM2Ny03LjE2Niw0LjEwMy05Ljg5N2w1Ni4yOTItNTYuMjk3DQoJCQljMC41MzktMC44MzgsMS4xNTctMS42MzcsMS44ODgtMi4zNjhjMi43OTYtMi43OTYsNi40NzYtNC4xNDIsMTAuMTQ2LTQuMDc3YzMuNjYyLTAuMDYyLDcuMzQ4LDEuMjgxLDEwLjE0MSw0LjA4DQoJCQljMC43MzQsMC43MjksMS4zNDksMS41MjgsMS44ODYsMi4zNjVsNTYuMDQzLDU2LjA0M0MyMjMuMTUyLDE3NS40NTQsMjIzLjE1NiwxODQuMzIyLDIxNy42ODUsMTg5Ljc5NHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg'+
			'0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;up;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.onmouseover=function (e) {
			me._up__img.style.visibility='hidden';
			me._up__imgo.style.visibility='inherit';
		}
		me._up.onmouseout=function (e) {
			me._up__img.style.visibility='inherit';
			me._up__imgo.style.visibility='hidden';
			me.elementMouseDown['up']=false;
		}
		me._up.onmousedown=function (e) {
			me.elementMouseDown['up']=true;
		}
		me._up.onmouseup=function (e) {
			me.elementMouseDown['up']=false;
		}
		me._up.ontouchend=function (e) {
			me.elementMouseDown['up']=false;
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me._translate.appendChild(me._up);
		el=me._down=document.createElement('div');
		els=me._down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMC4wMDMgMzAwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLj'+
			'AwMyAzMDAuMDAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE1MCwwQzY3LjE1OSwwLDAuMDAxLDY3LjE1OSwwLjAwMSwxNTBjMCw4Mi44MzgsNjcuMTU3LDE1MC4wMDMsMTQ5Ljk5NywxNTAuMDAzUzMwMC4wMDIsMjMyLjgzOCwzMDAuMDAyLDE1MA0KCQkJQzMwMC4wMDIsNjcuMTU5LDIzMi44NDIsMCwxNTAsMHogTTIxNy42ODUsMTMxLjY0N2wtNTYuMDQ2LDU2LjA0NmMtMC41MzcsMC44MzgtMS4xNDYsMS42MzctMS44OCwyLjM2NQ0KCQkJYy0yLjc5NiwyLjc5OS02LjQ4NCw0LjE0NS0xMC4xNDYsNC4wOGMtMy42NjcsMC4wNjItNy4zNDUtMS4yODEt'+
			'MTAuMTQxLTQuMDc3Yy0wLjczNC0wLjczMS0xLjM1MS0xLjUzLTEuODkxLTIuMzY4bC01Ni4yOS01Ni4yOTcNCgkJCWMtMi43MzYtMi43MzEtNC4xMDgtNi4zMTUtNC4xMDMtOS44OTdjLTAuMDA1LTMuNTg0LDEuMzY3LTcuMTY2LDQuMDk4LTkuOTAyYzUuNDctNS40NywxNC4zMzUtNS40NjcsMTkuODA4LDBsNDguNTE5LDQ4LjUxNA0KCQkJbDQ4LjI2Mi00OC4yN2M1LjQ3LTUuNDcsMTQuMzM4LTUuNDY1LDE5LjgxLDBDMjIzLjE1NiwxMTcuMzEsMjIzLjE0OSwxMjYuMTc1LDIxNy42ODUsMTMxLjY0N3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz'+
			'4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._down__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;down;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMC4wMDMgMzAwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLj'+
			'AwMyAzMDAuMDAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE1MCwwQzY3LjE1OSwwLDAuMDAxLDY3LjE1OSwwLjAwMSwxNTBjMCw4Mi44MzgsNjcuMTU3LDE1MC4wMDMsMTQ5Ljk5NywxNTAuMDAzUzMwMC4wMDIsMjMyLjgzOCwzMDAuMDAyLDE1MA0KCQkJQzMwMC4wMDIsNjcuMTU5LDIzMi44NDIsMCwxNTAsMHogTTIxNy42ODUsMTMxLjY0N2wtNTYuMDQ2LDU2LjA0NmMtMC41MzcsMC44MzgtMS4xNDYsMS42MzctMS44OCwyLjM2NQ0KCQkJYy0yLjc5NiwyLjc5OS02LjQ4NCw0LjE0NS0xMC4xNDYsNC4wOGMtMy42NjcsMC4wNjItNy4zNDUtMS4yODEt'+
			'MTAuMTQxLTQuMDc3Yy0wLjczNC0wLjczMS0xLjM1MS0xLjUzLTEuODkxLTIuMzY4bC01Ni4yOS01Ni4yOTcNCgkJCWMtMi43MzYtMi43MzEtNC4xMDgtNi4zMTUtNC4xMDMtOS44OTdjLTAuMDA1LTMuNTg0LDEuMzY3LTcuMTY2LDQuMDk4LTkuOTAyYzUuNDctNS40NywxNC4zMzUtNS40NjcsMTkuODA4LDBsNDguNTE5LDQ4LjUxNA0KCQkJbDQ4LjI2Mi00OC4yN2M1LjQ3LTUuNDcsMTQuMzM4LTUuNDY1LDE5LjgxLDBDMjIzLjE1NiwxMTcuMzEsMjIzLjE0OSwxMjYuMTc1LDIxNy42ODUsMTMxLjY0N3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz'+
			'4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;down;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._down.onmouseover=function (e) {
			me._down__img.style.visibility='hidden';
			me._down__imgo.style.visibility='inherit';
		}
		me._down.onmouseout=function (e) {
			me._down__img.style.visibility='inherit';
			me._down__imgo.style.visibility='hidden';
			me.elementMouseDown['down']=false;
		}
		me._down.onmousedown=function (e) {
			me.elementMouseDown['down']=true;
		}
		me._down.onmouseup=function (e) {
			me.elementMouseDown['down']=false;
		}
		me._down.ontouchend=function (e) {
			me.elementMouseDown['down']=false;
		}
		me._down.ggUpdatePosition=function (useTransition) {
		}
		me._translate.appendChild(me._down);
		el=me._left=document.createElement('div');
		els=me._left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMC4wMDMgMzAwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLj'+
			'AwMyAzMDAuMDAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE1MCwwQzY3LjE1OSwwLDAuMDAxLDY3LjE1OSwwLjAwMSwxNTBjMCw4Mi44MzgsNjcuMTU3LDE1MC4wMDMsMTQ5Ljk5NywxNTAuMDAzUzMwMC4wMDIsMjMyLjgzOCwzMDAuMDAyLDE1MA0KCQkJQzMwMC4wMDIsNjcuMTU5LDIzMi44MzksMCwxNTAsMHogTTE4OS4yMjYsMjE4LjIwMmMtMi43MzYsMi43MzQtNi4zMjEsNC4xMDEtOS45MDIsNC4xMDFjLTMuNTgyLDAtNy4xNjktMS4zNjctOS45MDItNC4xMDMNCgkJCWwtNTYuMjk1LTU2LjI5MmMtMC44MzgtMC41MzctMS42MzktMS4xNTQtMi4z'+
			'NjgtMS44ODZjLTIuNzk2LTIuNzk5LTQuMTQ1LTYuNDc5LTQuMDc3LTEwLjE0NA0KCQkJYy0wLjA2NS0zLjY2NywxLjI4MS03LjM1LDQuMDc3LTEwLjE0NmMwLjczNC0wLjczMSwxLjUzLTEuMzQ5LDIuMzY4LTEuODg2bDU2LjA0My01Ni4wNDNjNS40Ny01LjQ2NSwxNC4zNC01LjQ2NywxOS44MDgsMC4wMDMNCgkJCWM1LjQ3LDUuNDY3LDUuNDcsMTQuMzM1LDAsMTkuODA4bC00OC4yNjUsNDguMjY1bDQ4LjUxNCw0OC41MTZDMTk0LjY5NSwyMDMuODY0LDE5NC42OTUsMjEyLjczMiwxODkuMjI2LDIxOC4yMDJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg'+
			'0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';
		me._left__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;left;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMC4wMDMgMzAwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLj'+
			'AwMyAzMDAuMDAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE1MCwwQzY3LjE1OSwwLDAuMDAxLDY3LjE1OSwwLjAwMSwxNTBjMCw4Mi44MzgsNjcuMTU3LDE1MC4wMDMsMTQ5Ljk5NywxNTAuMDAzUzMwMC4wMDIsMjMyLjgzOCwzMDAuMDAyLDE1MA0KCQkJQzMwMC4wMDIsNjcuMTU5LDIzMi44MzksMCwxNTAsMHogTTE4OS4yMjYsMjE4LjIwMmMtMi43MzYsMi43MzQtNi4zMjEsNC4xMDEtOS45MDIsNC4xMDFjLTMuNTgyLDAtNy4xNjktMS4zNjctOS45MDItNC4xMDMNCgkJCWwtNTYuMjk1LTU2LjI5MmMtMC44MzgtMC41MzctMS42MzktMS4xNTQtMi4z'+
			'NjgtMS44ODZjLTIuNzk2LTIuNzk5LTQuMTQ1LTYuNDc5LTQuMDc3LTEwLjE0NA0KCQkJYy0wLjA2NS0zLjY2NywxLjI4MS03LjM1LDQuMDc3LTEwLjE0NmMwLjczNC0wLjczMSwxLjUzLTEuMzQ5LDIuMzY4LTEuODg2bDU2LjA0My01Ni4wNDNjNS40Ny01LjQ2NSwxNC4zNC01LjQ2NywxOS44MDgsMC4wMDMNCgkJCWM1LjQ3LDUuNDY3LDUuNDcsMTQuMzM1LDAsMTkuODA4bC00OC4yNjUsNDguMjY1bDQ4LjUxNCw0OC41MTZDMTk0LjY5NSwyMDMuODY0LDE5NC42OTUsMjEyLjczMiwxODkuMjI2LDIxOC4yMDJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg'+
			'0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';
		me._left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;left;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -90px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left.onmouseover=function (e) {
			me._left__img.style.visibility='hidden';
			me._left__imgo.style.visibility='inherit';
		}
		me._left.onmouseout=function (e) {
			me._left__img.style.visibility='inherit';
			me._left__imgo.style.visibility='hidden';
			me.elementMouseDown['left']=false;
		}
		me._left.onmousedown=function (e) {
			me.elementMouseDown['left']=true;
		}
		me._left.onmouseup=function (e) {
			me.elementMouseDown['left']=false;
		}
		me._left.ontouchend=function (e) {
			me.elementMouseDown['left']=false;
		}
		me._left.ggUpdatePosition=function (useTransition) {
		}
		me._translate.appendChild(me._left);
		el=me._right=document.createElement('div');
		els=me._right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMCAzMDA7IiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMTUwLDBDNjcuMTU3LDAsMCw2Ny4xNTcsMCwxNTBjMCw4Mi44NDEsNjcuMTU3LDE1MCwxNTAsMTUwczE1MC02Ny4xNTksMTUwLTE1MEMzMDAsNjcuMTU3LDIzMi44NDMsMCwxNTAsMHoNCgkJCSBNMTk1LjcwOCwxNjAuMTU5Yy0wLjczMSwwLjczMS0xLjUzMywxLjM0OS0yLjM2OCwxLjg4NmwtNTYuMjk1LDU2LjI5NWMtMi43MzQsMi43MzYtNi4zMTgsNC4xMDMtOS45MDIsNC4xMDMNCgkJCXMtNy4xNjYtMS4zNjctOS45MDItNC4xMDNjLTUuNDctNS40Ny01LjQ3LTE0LjM0LDAtMTkuODA4bDQ4LjUwOS00OC41MTZsLTQ4'+
			'LjI2NS00OC4yNjVjLTUuNDctNS40NzMtNS40Ny0xNC4zNCwwLTE5LjgwOA0KCQkJYzUuNDctNS40NywxNC4zMzgtNS40NjcsMTkuODA4LTAuMDAzbDU2LjA0Niw1Ni4wNDNjMC44MzUsMC41MzcsMS42MzcsMS4xNTQsMi4zNjUsMS44ODZjMi43OTYsMi43OTYsNC4xNDUsNi40NzksNC4wODIsMTAuMTQ2DQoJCQlDMTk5Ljg1MiwxNTMuNjgsMTk4LjUwNiwxNTcuMzYxLDE5NS43MDgsMTYwLjE1OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2'+
			'c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._right__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;right;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMCAzMDA7IiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMTUwLDBDNjcuMTU3LDAsMCw2Ny4xNTcsMCwxNTBjMCw4Mi44NDEsNjcuMTU3LDE1MCwxNTAsMTUwczE1MC02Ny4xNTksMTUwLTE1MEMzMDAsNjcuMTU3LDIzMi44NDMsMCwxNTAsMHoNCgkJCSBNMTk1LjcwOCwxNjAuMTU5Yy0wLjczMSwwLjczMS0xLjUzMywxLjM0OS0yLjM2OCwxLjg4NmwtNTYuMjk1LDU2LjI5NWMtMi43MzQsMi43MzYtNi4zMTgsNC4xMDMtOS45MDIsNC4xMDMNCgkJCXMtNy4xNjYtMS4zNjctOS45MDItNC4xMDNjLTUuNDctNS40Ny01LjQ3LTE0LjM0LDAtMTkuODA4bDQ4LjUwOS00OC41MTZsLTQ4'+
			'LjI2NS00OC4yNjVjLTUuNDctNS40NzMtNS40Ny0xNC4zNCwwLTE5LjgwOA0KCQkJYzUuNDctNS40NywxNC4zMzgtNS40NjcsMTkuODA4LTAuMDAzbDU2LjA0Niw1Ni4wNDNjMC44MzUsMC41MzcsMS42MzcsMS4xNTQsMi4zNjUsMS44ODZjMi43OTYsMi43OTYsNC4xNDUsNi40NzksNC4wODIsMTAuMTQ2DQoJCQlDMTk5Ljg1MiwxNTMuNjgsMTk4LjUwNiwxNTcuMzYxLDE5NS43MDgsMTYwLjE1OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2'+
			'c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;right;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right.onmouseover=function (e) {
			me._right__img.style.visibility='hidden';
			me._right__imgo.style.visibility='inherit';
		}
		me._right.onmouseout=function (e) {
			me._right__img.style.visibility='inherit';
			me._right__imgo.style.visibility='hidden';
			me.elementMouseDown['right']=false;
		}
		me._right.onmousedown=function (e) {
			me.elementMouseDown['right']=true;
		}
		me._right.onmouseup=function (e) {
			me.elementMouseDown['right']=false;
		}
		me._right.ontouchend=function (e) {
			me.elementMouseDown['right']=false;
		}
		me._right.ggUpdatePosition=function (useTransition) {
		}
		me._translate.appendChild(me._right);
		me._controller.appendChild(me._translate);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMC4wMDMgMzAwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLj'+
			'AwMyAzMDAuMDAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE1MCwwQzY3LjE1OSwwLDAuMDAxLDY3LjE1OSwwLjAwMSwxNTBjMCw4Mi44MzgsNjcuMTU3LDE1MC4wMDMsMTQ5Ljk5NywxNTAuMDAzUzMwMC4wMDIsMjMyLjgzOCwzMDAuMDAyLDE1MA0KCQkJQzMwMC4wMDIsNjcuMTU5LDIzMi44MzksMCwxNTAsMHogTTIxMy4yODEsMTY2LjUwMWgtNDguMjd2NTAuNDY5Yy0wLjAwMyw4LjQ2My02Ljg2MywxNS4zMjMtMTUuMzI4LDE1LjMyMw0KCQkJYy04LjQ2OCwwLTE1LjMyOC02Ljg2LTE1LjMyOC0xNS4zMjh2LTUwLjQ2NEg4Ny4zN2MtOC40NjYtMC4w'+
			'MDMtMTUuMzIzLTYuODYzLTE1LjMyOC0xNS4zMjhjMC04LjQ2Myw2Ljg2My0xNS4zMjYsMTUuMzI4LTE1LjMyOA0KCQkJbDQ2Ljk4NCwwLjAwM1Y5MS4wNTdjMC04LjQ2Niw2Ljg2My0xNS4zMjgsMTUuMzI2LTE1LjMyOGM4LjQ2OCwwLDE1LjMzMSw2Ljg2MywxNS4zMjgsMTUuMzI4bDAuMDAzLDQ0Ljc4N2w0OC4yNjUsMC4wMDUNCgkJCWM4LjQ2Ni0wLjAwNSwxNS4zMzEsNi44NiwxNS4zMjgsMTUuMzI4QzIyOC42MDcsMTU5LjY0MywyMjEuNzQyLDE2Ni41MDEsMjEzLjI4MSwxNjYuNTAxeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg'+
			'0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;zoomin;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMC4wMDMgMzAwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLj'+
			'AwMyAzMDAuMDAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE1MCwwQzY3LjE1OSwwLDAuMDAxLDY3LjE1OSwwLjAwMSwxNTBjMCw4Mi44MzgsNjcuMTU3LDE1MC4wMDMsMTQ5Ljk5NywxNTAuMDAzUzMwMC4wMDIsMjMyLjgzOCwzMDAuMDAyLDE1MA0KCQkJQzMwMC4wMDIsNjcuMTU5LDIzMi44MzksMCwxNTAsMHogTTIxMy4yODEsMTY2LjUwMWgtNDguMjd2NTAuNDY5Yy0wLjAwMyw4LjQ2My02Ljg2MywxNS4zMjMtMTUuMzI4LDE1LjMyMw0KCQkJYy04LjQ2OCwwLTE1LjMyOC02Ljg2LTE1LjMyOC0xNS4zMjh2LTUwLjQ2NEg4Ny4zN2MtOC40NjYtMC4w'+
			'MDMtMTUuMzIzLTYuODYzLTE1LjMyOC0xNS4zMjhjMC04LjQ2Myw2Ljg2My0xNS4zMjYsMTUuMzI4LTE1LjMyOA0KCQkJbDQ2Ljk4NCwwLjAwM1Y5MS4wNTdjMC04LjQ2Niw2Ljg2My0xNS4zMjgsMTUuMzI2LTE1LjMyOGM4LjQ2OCwwLDE1LjMzMSw2Ljg2MywxNS4zMjgsMTUuMzI4bDAuMDAzLDQ0Ljc4N2w0OC4yNjUsMC4wMDUNCgkJCWM4LjQ2Ni0wLjAwNSwxNS4zMzEsNi44NiwxNS4zMjgsMTUuMzI4QzIyOC42MDcsMTU5LjY0MywyMjEuNzQyLDE2Ni41MDEsMjEzLjI4MSwxNjYuNTAxeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg'+
			'0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;zoomin;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 220px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseover=function (e) {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility=(Number(me._tt_zoomin.style.opacity)>0||!me._tt_zoomin.style.opacity)?'inherit':'hidden';
			me._tt_zoomin.ggVisible=true;
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		me._zoomin.onmouseout=function (e) {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='hidden';
			me._tt_zoomin.ggVisible=false;
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomin=document.createElement('div');
		els=me._tt_zoomin__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomin";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Zoom In";
		el.appendChild(els);
		me._tt_zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_zoomin_white=document.createElement('div');
		els=me._tt_zoomin_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomin_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Zoom In";
		el.appendChild(els);
		me._tt_zoomin_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomin_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_zoomin.appendChild(me._tt_zoomin_white);
		me._zoomin.appendChild(me._tt_zoomin);
		me._controller.appendChild(me._zoomin);
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMC4wMDMgMzAwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLj'+
			'AwMyAzMDAuMDAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE1MC4wMDEsMGMtODIuODQzLDAtMTUwLDY3LjE1OS0xNTAsMTUwYzAsODIuODM4LDY3LjE1NywxNTAuMDAzLDE1MCwxNTAuMDAzYzgyLjgzOCwwLDE1MC02Ny4xNjUsMTUwLTE1MC4wMDMNCgkJCUMzMDAuMDAxLDY3LjE1OSwyMzIuODM4LDAsMTUwLjAwMSwweiBNMTk3LjIxOCwxNjYuMjgzSDkyLjQxYy04LjQxNiwwLTE1LjIzOC02LjgyMS0xNS4yMzgtMTUuMjM4czYuODIxLTE1LjIzOCwxNS4yMzgtMTUuMjM4DQoJCQlIMTk3LjIyYzguNDE2LDAsMTUuMjM4LDYuODIxLDE1LjIzOCwxNS4y'+
			'MzhTMjA1LjYzNCwxNjYuMjgzLDE5Ny4yMTgsMTY2LjI4M3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;zoomout;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMC4wMDMgMzAwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLj'+
			'AwMyAzMDAuMDAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE1MC4wMDEsMGMtODIuODQzLDAtMTUwLDY3LjE1OS0xNTAsMTUwYzAsODIuODM4LDY3LjE1NywxNTAuMDAzLDE1MCwxNTAuMDAzYzgyLjgzOCwwLDE1MC02Ny4xNjUsMTUwLTE1MC4wMDMNCgkJCUMzMDAuMDAxLDY3LjE1OSwyMzIuODM4LDAsMTUwLjAwMSwweiBNMTk3LjIxOCwxNjYuMjgzSDkyLjQxYy04LjQxNiwwLTE1LjIzOC02LjgyMS0xNS4yMzgtMTUuMjM4czYuODIxLTE1LjIzOCwxNS4yMzgtMTUuMjM4DQoJCQlIMTk3LjIyYzguNDE2LDAsMTUuMjM4LDYuODIxLDE1LjIzOCwxNS4y'+
			'MzhTMjA1LjYzNCwxNjYuMjgzLDE5Ny4yMTgsMTY2LjI4M3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;zoomout;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 280px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseover=function (e) {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility=(Number(me._tt_zoomout.style.opacity)>0||!me._tt_zoomout.style.opacity)?'inherit':'hidden';
			me._tt_zoomout.ggVisible=true;
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		me._zoomout.onmouseout=function (e) {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='hidden';
			me._tt_zoomout.ggVisible=false;
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomout=document.createElement('div');
		els=me._tt_zoomout__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomout";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Zoom Out";
		el.appendChild(els);
		me._tt_zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomout.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_zoomout_white=document.createElement('div');
		els=me._tt_zoomout_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomout_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Zoom Out";
		el.appendChild(els);
		me._tt_zoomout_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomout_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_zoomout.appendChild(me._tt_zoomout_white);
		me._zoomout.appendChild(me._tt_zoomout);
		me._controller.appendChild(me._zoomout);
		el=me._autorotate=document.createElement('div');
		els=me._autorotate__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMC4wMDMgMzAwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLj'+
			'AwMyAzMDAuMDAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE1MC4wMDUsMEM2Ny4xNjQsMCwwLjAwMSw2Ny4xNTksMC4wMDEsMTUwYzAsODIuODM4LDY3LjE2MiwxNTAuMDAzLDE1MC4wMDMsMTUwLjAwM1MzMDAuMDAyLDIzMi44MzgsMzAwLjAwMiwxNTANCgkJCUMzMDAuMDAyLDY3LjE1OSwyMzIuODQ0LDAsMTUwLjAwNSwweiBNMjMwLjA5MSwxNzIuNDQ0Yy05LjkyMSwzNy4wODMtNDMuODAxLDY0LjQ3Ny04My45NjksNjQuNDc3DQoJCQljLTQ3LjkzLDAtODYuOTIzLTM4Ljk5LTg2LjkyMy04Ni45MjNzMzguOTktODYuOTIsODYuOTIzLTg2LjkyYzIx'+
			'LjkwNiwwLDQxLjkzMSw4LjE1Nyw1Ny4yMjgsMjEuNTc5bC0xMy42MzcsMjMuNjIzDQoJCQljLTExLTExLjQ4Ny0yNi40NjgtMTguNjY0LTQzLjU5NC0xOC42NjRjLTMzLjI5NCwwLTYwLjM4LDI3LjA4OC02MC4zOCw2MC4zOGMwLDMzLjI5NCwyNy4wODUsNjAuMzgsNjAuMzgsNjAuMzgNCgkJCWMyNS4zNjMsMCw0Ny4xMTMtMTUuNzI4LDU2LjAzOC0zNy45MzdoLTIwLjc2NWwzNi4xNjgtNjIuNjM2bDM2LjE2Niw2Mi42NDFIMjMwLjA5MXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCj'+
			'wvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._autorotate__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;autorotate;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMC4wMDMgMzAwLjAwMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzAwLj'+
			'AwMyAzMDAuMDAzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE1MC4wMDUsMEM2Ny4xNjQsMCwwLjAwMSw2Ny4xNTksMC4wMDEsMTUwYzAsODIuODM4LDY3LjE2MiwxNTAuMDAzLDE1MC4wMDMsMTUwLjAwM1MzMDAuMDAyLDIzMi44MzgsMzAwLjAwMiwxNTANCgkJCUMzMDAuMDAyLDY3LjE1OSwyMzIuODQ0LDAsMTUwLjAwNSwweiBNMjMwLjA5MSwxNzIuNDQ0Yy05LjkyMSwzNy4wODMtNDMuODAxLDY0LjQ3Ny04My45NjksNjQuNDc3DQoJCQljLTQ3LjkzLDAtODYuOTIzLTM4Ljk5LTg2LjkyMy04Ni45MjNzMzguOTktODYuOTIsODYuOTIzLTg2LjkyYzIx'+
			'LjkwNiwwLDQxLjkzMSw4LjE1Nyw1Ny4yMjgsMjEuNTc5bC0xMy42MzcsMjMuNjIzDQoJCQljLTExLTExLjQ4Ny0yNi40NjgtMTguNjY0LTQzLjU5NC0xOC42NjRjLTMzLjI5NCwwLTYwLjM4LDI3LjA4OC02MC4zOCw2MC4zOGMwLDMzLjI5NCwyNy4wODUsNjAuMzgsNjAuMzgsNjAuMzgNCgkJCWMyNS4zNjMsMCw0Ny4xMTMtMTUuNzI4LDU2LjAzOC0zNy45MzdoLTIwLjc2NWwzNi4xNjgtNjIuNjM2bDM2LjE2Niw2Mi42NDFIMjMwLjA5MXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCj'+
			'wvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._autorotate__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;autorotate;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="autorotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 340px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._autorotate.onmouseover=function (e) {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility=(Number(me._tt_autorotate.style.opacity)>0||!me._tt_autorotate.style.opacity)?'inherit':'hidden';
			me._tt_autorotate.ggVisible=true;
			me._autorotate__img.style.visibility='hidden';
			me._autorotate__imgo.style.visibility='inherit';
		}
		me._autorotate.onmouseout=function (e) {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='hidden';
			me._tt_autorotate.ggVisible=false;
			me._autorotate__img.style.visibility='inherit';
			me._autorotate__imgo.style.visibility='hidden';
		}
		me._autorotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_autorotate=document.createElement('div');
		els=me._tt_autorotate__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_autorotate";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 170px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Start\/Stop Autorotation";
		el.appendChild(els);
		me._tt_autorotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_autorotate.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_autorotate_white=document.createElement('div');
		els=me._tt_autorotate_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_autorotate_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 170px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Start\/Stop Autorotation";
		el.appendChild(els);
		me._tt_autorotate_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_autorotate_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_autorotate.appendChild(me._tt_autorotate_white);
		me._autorotate.appendChild(me._tt_autorotate);
		me._controller.appendChild(me._autorotate);
		el=me._movemode=document.createElement('div');
		els=me._movemode__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMCAzMDA7IiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxjaXJjbGUgY3g9IjE0OS45OTYiIGN5PSIxNTYuMDcyIiByPSIyOC4xOTciLz4NCgkJCTxwYXRoIGQ9Ik0xNDkuOTk2LDBDNjcuMTU3LDAsMC4wMDEsNjcuMTYxLDAuMDAxLDE0OS45OTdTNjcuMTU3LDMwMCwxNDkuOTk2LDMwMHMxNTAuMDAzLTY3LjE2MywxNTAuMDAzLTE1MC4wMDMNCgkJCQlTMjMyLjgzNSwwLDE0OS45OTYsMHogTTIyOC44MiwxNzEuNzk5bC0yMS4zMDYsMS4zNzJjLTEuMTkzLDQuMDItMi43ODMsNy44NjYtNC43NDYsMTEuNDgybDE0LjA4OCwxNi4wMzlsLTIyLjI0NSwyMi4yNDMNCgkJCQlsLTE2LjAz'+
			'MS0xNC4wOTFjLTMuNjE4LDEuOTYxLTcuNDY0LDMuNTUxLTExLjQ4Miw0Ljc0MWwtMS4zNzcsMjEuMzExbC0zMS40NTgtMC4wMDNsLTEuMzc1LTIxLjMwOQ0KCQkJCWMtNC4wMTUtMS4xOS03Ljg2MS0yLjc4LTExLjQ3OS00Ljc0MWwtMTYuMDM0LDE0LjA5MWwtMjIuMjQzLTIyLjI1bDE0LjA4OC0xNi4wMzFjLTEuOTYzLTMuNjE4LTMuNTUzLTcuNDY0LTQuNzQ2LTExLjQ4Mg0KCQkJCWwtMjEuMzA2LTEuMzc1di0zMS40NThsMjEuMzA2LTEuMzc1YzEuMTkzLTQuMDE1LDIuNzg2LTcuODY0LDQuNzQ2LTExLjQ3OWwtMTQuMDg4LTE2LjAzMWwyMi4yNDUtMjIuMjQ4bDE2LjAzMSwxNC4wODgNCgkJCQ'+
			'ljMy42MTgtMS45NjMsNy40NjQtMy41NTEsMTEuNDg0LTQuNzQ0bDEuMzc1LTIxLjMwOWgzMS40NTJsMS4zNzcsMjEuMzA5YzQuMDE3LDEuMTkzLDcuODY0LDIuNzgsMTEuNDgyLDQuNzQ0bDE2LjAzNi0xNC4wODgNCgkJCQlsMjIuMjQzLDIyLjI0OGwtMTQuMDg4LDE2LjAzMWMxLjk2MSwzLjYxOCwzLjU1Myw3LjQ2NCw0Ljc0NiwxMS40NzlsMjEuMzA2LDEuMzc1TDIyOC44MiwxNzEuNzk5eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxn'+
			'Pg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';
		me._movemode__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;movemode;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._movemode__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMCAzMDA7IiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxjaXJjbGUgY3g9IjE0OS45OTYiIGN5PSIxNTYuMDcyIiByPSIyOC4xOTciLz4NCgkJCTxwYXRoIGQ9Ik0xNDkuOTk2LDBDNjcuMTU3LDAsMC4wMDEsNjcuMTYxLDAuMDAxLDE0OS45OTdTNjcuMTU3LDMwMCwxNDkuOTk2LDMwMHMxNTAuMDAzLTY3LjE2MywxNTAuMDAzLTE1MC4wMDMNCgkJCQlTMjMyLjgzNSwwLDE0OS45OTYsMHogTTIyOC44MiwxNzEuNzk5bC0yMS4zMDYsMS4zNzJjLTEuMTkzLDQuMDItMi43ODMsNy44NjYtNC43NDYsMTEuNDgybDE0LjA4OCwxNi4wMzlsLTIyLjI0NSwyMi4yNDMNCgkJCQlsLTE2LjAz'+
			'MS0xNC4wOTFjLTMuNjE4LDEuOTYxLTcuNDY0LDMuNTUxLTExLjQ4Miw0Ljc0MWwtMS4zNzcsMjEuMzExbC0zMS40NTgtMC4wMDNsLTEuMzc1LTIxLjMwOQ0KCQkJCWMtNC4wMTUtMS4xOS03Ljg2MS0yLjc4LTExLjQ3OS00Ljc0MWwtMTYuMDM0LDE0LjA5MWwtMjIuMjQzLTIyLjI1bDE0LjA4OC0xNi4wMzFjLTEuOTYzLTMuNjE4LTMuNTUzLTcuNDY0LTQuNzQ2LTExLjQ4Mg0KCQkJCWwtMjEuMzA2LTEuMzc1di0zMS40NThsMjEuMzA2LTEuMzc1YzEuMTkzLTQuMDE1LDIuNzg2LTcuODY0LDQuNzQ2LTExLjQ3OWwtMTQuMDg4LTE2LjAzMWwyMi4yNDUtMjIuMjQ4bDE2LjAzMSwxNC4wODgNCgkJCQ'+
			'ljMy42MTgtMS45NjMsNy40NjQtMy41NTEsMTEuNDg0LTQuNzQ0bDEuMzc1LTIxLjMwOWgzMS40NTJsMS4zNzcsMjEuMzA5YzQuMDE3LDEuMTkzLDcuODY0LDIuNzgsMTEuNDgyLDQuNzQ0bDE2LjAzNi0xNC4wODgNCgkJCQlsMjIuMjQzLDIyLjI0OGwtMTQuMDg4LDE2LjAzMWMxLjk2MSwzLjYxOCwzLjU1Myw3LjQ2NCw0Ljc0NiwxMS40NzlsMjEuMzA2LDEuMzc1TDIyOC44MiwxNzEuNzk5eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxn'+
			'Pg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';
		me._movemode__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;movemode;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="movemode";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 340px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._movemode.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._movemode.onclick=function (e) {
			player.changeViewMode(2);
		}
		me._movemode.onmouseover=function (e) {
			me._tt_movemode.style[domTransition]='none';
			me._tt_movemode.style.visibility=(Number(me._tt_movemode.style.opacity)>0||!me._tt_movemode.style.opacity)?'inherit':'hidden';
			me._tt_movemode.ggVisible=true;
			me._movemode__img.style.visibility='hidden';
			me._movemode__imgo.style.visibility='inherit';
		}
		me._movemode.onmouseout=function (e) {
			me._tt_movemode.style[domTransition]='none';
			me._tt_movemode.style.visibility='hidden';
			me._tt_movemode.ggVisible=false;
			me._movemode__img.style.visibility='inherit';
			me._movemode__imgo.style.visibility='hidden';
		}
		me._movemode.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_movemode=document.createElement('div');
		els=me._tt_movemode__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_movemode";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 170px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Change Control Mode";
		el.appendChild(els);
		me._tt_movemode.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_movemode.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_movemode_white=document.createElement('div');
		els=me._tt_movemode_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_movemode_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 170px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Change Control Mode";
		el.appendChild(els);
		me._tt_movemode_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_movemode_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_movemode.appendChild(me._tt_movemode_white);
		me._movemode.appendChild(me._tt_movemode);
		me._controller.appendChild(me._movemode);
		el=me._thumbnail_show_button_show=document.createElement('div');
		els=me._thumbnail_show_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMCAzMDA7IiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMTUwLjAwMywwQzY3LjE2MiwwLDAsNjcuMTU5LDAsMTUwczY3LjE2MiwxNTAsMTUwLjAwMywxNTBTMzAwLDIzMi44MzgsMzAwLDE1MEMzMDAsNjcuMTU3LDIzMi44NDMsMCwxNTAuMDAzLDB6DQoJCQkgTTIwOC4yNzYsMjE0LjM1Nkg5MC43MzZjLTguMTE4LDAtMTQuNjk4LTYuNTgtMTQuNjk4LTE0LjY5NmMwLTguMTIxLDYuNTgtMTQuNzAxLDE0LjY5OC0xNC43MDFoMTE3LjUzOA0KCQkJYzguMTE4LDAsMTQuNjk4LDYuNTgsMTQuNjk4LDE0LjcwMUMyMjIuOTc0LDIwNy43NzMsMjE2LjM5NCwyMTQuMzU2LDIwOC4yNzYs'+
			'MjE0LjM1NnogTTIxMC4wMDYsMTY2LjM3NGMtMC4wMSwwLTAuMDMxLDAtMC4wNDksMA0KCQkJYy0wLjAxLDAtMC4wMjMsMC0wLjAzNiwwSDg5LjAzOWMtMC4zMTEtMC4wMDUtMC40NTYtMC4wMDUtMC42OC0wLjAxYy0wLjAwNSwwLTAuMDA4LDAtMC4wMTMsMA0KCQkJYy0xLjM5OC0wLjA3LTIuNzQxLTAuMzQtMy45ODktMC43ODZjLTEuMzIzLTAuNDcyLTIuNTgzLTEuMTQ5LTMuNzE5LTIuMDQxYy0wLjAwNSwwLTAuMDA1LTAuMDA1LTAuMDEtMC4wMDUNCgkJCWMtMC4xOTItMC4xNTMtMC4zODEtMC4zMDktMC41NjUtMC40NzJjMCwwLTAuMDA1LTAuMDA1LTAuMDEtMC4wMWMtMS4yODktMS4xMzktMi'+
			'4yNzItMi40NjctMi45NDQtMy45MDENCgkJCWMtMC42NzItMS40MjQtMS4wNS0yLjk5OC0xLjA3NC00LjY0NWMwLTAuMDU0LDAtMC4xMDEsMC0wLjE1M2MwLTAuMjAyLDAuMDA1LTAuMzk5LDAuMDE2LTAuNjAyDQoJCQljMC4wNy0xLjMzMywwLjM3Ni0yLjYwNCwwLjg3Ny0zLjc5MmMwLjUwNi0xLjE5MywxLjIyOS0yLjMzMiwyLjE2OC0zLjM2N2MwLjE0My0wLjE1MywwLjI4NS0wLjMwMywwLjQzNi0wLjQ1MWw2MC40NTgtNjAuMjI0DQoJCQljMi40NTQtMi40NDMsNS44OS0zLjgzMyw5LjQ5My0zLjgzM2MzLjYwMywwLDcuMDM5LDEuMzg4LDkuNDkzLDMuODMzbDU5LjgyMiw1OS41OTZjMi41Njgs'+
			'Mi4xOTksNC4xNzYsNS4zNDUsNC4xNzYsOC44NDQNCgkJCUMyMjIuOTc0LDE2MC45OTIsMjE3LjE2NywxNjYuMzc0LDIxMC4wMDYsMTY2LjM3NHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._thumbnail_show_button_show__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_show_button_show;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_show_button_show__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMCAzMDA7IiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMTUwLjAwMywwQzY3LjE2MiwwLDAsNjcuMTU5LDAsMTUwczY3LjE2MiwxNTAsMTUwLjAwMywxNTBTMzAwLDIzMi44MzgsMzAwLDE1MEMzMDAsNjcuMTU3LDIzMi44NDMsMCwxNTAuMDAzLDB6DQoJCQkgTTIwOC4yNzYsMjE0LjM1Nkg5MC43MzZjLTguMTE4LDAtMTQuNjk4LTYuNTgtMTQuNjk4LTE0LjY5NmMwLTguMTIxLDYuNTgtMTQuNzAxLDE0LjY5OC0xNC43MDFoMTE3LjUzOA0KCQkJYzguMTE4LDAsMTQuNjk4LDYuNTgsMTQuNjk4LDE0LjcwMUMyMjIuOTc0LDIwNy43NzMsMjE2LjM5NCwyMTQuMzU2LDIwOC4yNzYs'+
			'MjE0LjM1NnogTTIxMC4wMDYsMTY2LjM3NGMtMC4wMSwwLTAuMDMxLDAtMC4wNDksMA0KCQkJYy0wLjAxLDAtMC4wMjMsMC0wLjAzNiwwSDg5LjAzOWMtMC4zMTEtMC4wMDUtMC40NTYtMC4wMDUtMC42OC0wLjAxYy0wLjAwNSwwLTAuMDA4LDAtMC4wMTMsMA0KCQkJYy0xLjM5OC0wLjA3LTIuNzQxLTAuMzQtMy45ODktMC43ODZjLTEuMzIzLTAuNDcyLTIuNTgzLTEuMTQ5LTMuNzE5LTIuMDQxYy0wLjAwNSwwLTAuMDA1LTAuMDA1LTAuMDEtMC4wMDUNCgkJCWMtMC4xOTItMC4xNTMtMC4zODEtMC4zMDktMC41NjUtMC40NzJjMCwwLTAuMDA1LTAuMDA1LTAuMDEtMC4wMWMtMS4yODktMS4xMzktMi'+
			'4yNzItMi40NjctMi45NDQtMy45MDENCgkJCWMtMC42NzItMS40MjQtMS4wNS0yLjk5OC0xLjA3NC00LjY0NWMwLTAuMDU0LDAtMC4xMDEsMC0wLjE1M2MwLTAuMjAyLDAuMDA1LTAuMzk5LDAuMDE2LTAuNjAyDQoJCQljMC4wNy0xLjMzMywwLjM3Ni0yLjYwNCwwLjg3Ny0zLjc5MmMwLjUwNi0xLjE5MywxLjIyOS0yLjMzMiwyLjE2OC0zLjM2N2MwLjE0My0wLjE1MywwLjI4NS0wLjMwMywwLjQzNi0wLjQ1MWw2MC40NTgtNjAuMjI0DQoJCQljMi40NTQtMi40NDMsNS44OS0zLjgzMyw5LjQ5My0zLjgzM2MzLjYwMywwLDcuMDM5LDEuMzg4LDkuNDkzLDMuODMzbDU5LjgyMiw1OS41OTZjMi41Njgs'+
			'Mi4xOTksNC4xNzYsNS4zNDUsNC4xNzYsOC44NDQNCgkJCUMyMjIuOTc0LDE2MC45OTIsMjE3LjE2NywxNjYuMzc0LDIxMC4wMDYsMTY2LjM3NHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._thumbnail_show_button_show__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;thumbnail_show_button_show;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="thumbnail_show_button_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_show_button_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_show_button_show.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._thumbnail_show_button_show.onmouseover=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='hidden';
			me._thumbnail_show_button_show__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnail_show_button_show']=true;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail_show_button_show.onmouseout=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='inherit';
			me._thumbnail_show_button_show__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnail_show_button_show']=false;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail_show_button_show.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_show_button_show']=false;
			me._tt_thumbnail_open.logicBlock_visible();
		}
		me._thumbnail_show_button_show.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_thumbnail_open=document.createElement('div');
		els=me._tt_thumbnail_open__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_thumbnail_open";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 0.5px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_thumbnail_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_thumbnail_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_thumbnail_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_thumbnail_open.style.top='-25px';
					me._tt_thumbnail_open.ggUpdatePosition(true);
				}
				else {
					me._tt_thumbnail_open.ggDx=0;
					me._tt_thumbnail_open.style.top='50px';
					me._tt_thumbnail_open.ggUpdatePosition(true);
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['thumbnail_show_button_show'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_thumbnail_open.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateVisible == 0) {
					me._tt_thumbnail_open.style.visibility=(Number(me._tt_thumbnail_open.style.opacity)>0||!me._tt_thumbnail_open.style.opacity)?'inherit':'hidden';
					me._tt_thumbnail_open.ggVisible=true;
				}
				else {
					me._tt_thumbnail_open.style.visibility="hidden";
					me._tt_thumbnail_open.ggVisible=false;
				}
			}
		}
		me._tt_thumbnail_open.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(player.getVariableValue('vis_thumbnail_menu') == false)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(player.getVariableValue('vis_thumbnail_menu') == true)
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_thumbnail_open.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_thumbnail_open.ggCurrentLogicStateText = newLogicStateText;
				me._tt_thumbnail_open.style[domTransition]='left 0s, top 0s';
				if (me._tt_thumbnail_open.ggCurrentLogicStateText == 0) {
					me._tt_thumbnail_open.ggText="Show Thumbnail Menu";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="Show Thumbnail Menu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else if (me._tt_thumbnail_open.ggCurrentLogicStateText == 1) {
					me._tt_thumbnail_open.ggText="Hide Thumbnail Menu";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="Hide Thumbnail Menu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
				else {
					me._tt_thumbnail_open.ggText="";
					me._tt_thumbnail_open__text.innerHTML=me._tt_thumbnail_open.ggText;
					if (me._tt_thumbnail_open.ggUpdateText) {
					me._tt_thumbnail_open.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_thumbnail_open.ggUpdatePosition) me._tt_thumbnail_open.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_thumbnail_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._thumbnail_show_button_show.appendChild(me._tt_thumbnail_open);
		me._controller.appendChild(me._thumbnail_show_button_show);
		el=me._stereographic=document.createElement('div');
		els=me._stereographic__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMCAzMDA7IiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMTUwLDBDNjcuMTYyLDAsMCw2Ny4xNTksMCwxNTBzNjcuMTYyLDE1MCwxNTAsMTUwYzgyLjg0MywwLDE1MC02Ny4xNjIsMTUwLTE1MEMzMDAsNjcuMTU3LDIzMi44NDMsMCwxNTAsMHoNCgkJCSBNMTEzLjg0NSwxOTAuODE5SDk2LjQxM3YyMC4wNTljMCw4Ljc4NS03LjEyLDE1LjkwMi0xNS44OTksMTUuOTAyYy04Ljc4MiwwLTE1Ljg5OS03LjExNy0xNS44OTktMTUuOTAydi0yMC4wNTlINDcuMTgzVjE3Ny4wOA0KCQkJaDE3LjQzMlY5My4zNjhjMC04Ljc4Miw3LjExNy0xNS44OTksMTUuODk5LTE1Ljg5OWM4Ljc3OSww'+
			'LDE1Ljg5OSw3LjExNywxNS44OTksMTUuODk5djgzLjcxNWgxNy40MzJWMTkwLjgxOXogTTE4My4zMzEsMTE5LjE3Nw0KCQkJaC0xNy40MzJ2OTEuNzAzYzAsOC43ODUtNy4xMiwxNS45MDItMTUuODk5LDE1LjkwMmMtOC43ODIsMC0xNS44OTktNy4xMTctMTUuODk5LTE1LjkwMnYtOTEuNzAzaC0xNy40MzJ2LTEzLjczNmgxNy40MzJWOTMuMzY4DQoJCQljMC04Ljc4Miw3LjExNy0xNS44OTksMTUuODk5LTE1Ljg5OWM4Ljc3OSwwLDE1Ljg5OSw3LjExNywxNS44OTksMTUuODk5djEyLjA3M2gxNy40MzJWMTE5LjE3N3ogTTI1Mi44MTcsMTkwLjgxOWgtMTcuNDMydjIwLjA1OQ0KCQkJYzAsOC43OD'+
			'UtNy4xMiwxNS45MDItMTUuODk5LDE1LjkwMmMtOC43ODIsMC0xNS44OTktNy4xMTctMTUuODk5LTE1LjkwMnYtMjAuMDU5aC0xNy40MzJWMTc3LjA4aDE3LjQzMlY5My4zNjgNCgkJCWMwLTguNzgyLDcuMTE3LTE1Ljg5OSwxNS44OTktMTUuODk5YzguNzc5LDAsMTUuODk5LDcuMTE3LDE1Ljg5OSwxNS44OTl2ODMuNzE1aDE3LjQzMlYxOTAuODE5eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8'+
			'Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';
		me._stereographic__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;stereographic;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stereographic__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMCAzMDA7IiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMTUwLDBDNjcuMTYyLDAsMCw2Ny4xNTksMCwxNTBzNjcuMTYyLDE1MCwxNTAsMTUwYzgyLjg0MywwLDE1MC02Ny4xNjIsMTUwLTE1MEMzMDAsNjcuMTU3LDIzMi44NDMsMCwxNTAsMHoNCgkJCSBNMTEzLjg0NSwxOTAuODE5SDk2LjQxM3YyMC4wNTljMCw4Ljc4NS03LjEyLDE1LjkwMi0xNS44OTksMTUuOTAyYy04Ljc4MiwwLTE1Ljg5OS03LjExNy0xNS44OTktMTUuOTAydi0yMC4wNTlINDcuMTgzVjE3Ny4wOA0KCQkJaDE3LjQzMlY5My4zNjhjMC04Ljc4Miw3LjExNy0xNS44OTksMTUuODk5LTE1Ljg5OWM4Ljc3OSww'+
			'LDE1Ljg5OSw3LjExNywxNS44OTksMTUuODk5djgzLjcxNWgxNy40MzJWMTkwLjgxOXogTTE4My4zMzEsMTE5LjE3Nw0KCQkJaC0xNy40MzJ2OTEuNzAzYzAsOC43ODUtNy4xMiwxNS45MDItMTUuODk5LDE1LjkwMmMtOC43ODIsMC0xNS44OTktNy4xMTctMTUuODk5LTE1LjkwMnYtOTEuNzAzaC0xNy40MzJ2LTEzLjczNmgxNy40MzJWOTMuMzY4DQoJCQljMC04Ljc4Miw3LjExNy0xNS44OTksMTUuODk5LTE1Ljg5OWM4Ljc3OSwwLDE1Ljg5OSw3LjExNywxNS44OTksMTUuODk5djEyLjA3M2gxNy40MzJWMTE5LjE3N3ogTTI1Mi44MTcsMTkwLjgxOWgtMTcuNDMydjIwLjA1OQ0KCQkJYzAsOC43OD'+
			'UtNy4xMiwxNS45MDItMTUuODk5LDE1LjkwMmMtOC43ODIsMC0xNS44OTktNy4xMTctMTUuODk5LTE1LjkwMnYtMjAuMDU5aC0xNy40MzJWMTc3LjA4aDE3LjQzMlY5My4zNjgNCgkJCWMwLTguNzgyLDcuMTE3LTE1Ljg5OSwxNS44OTktMTUuODk5YzguNzc5LDAsMTUuODk5LDcuMTE3LDE1Ljg5OSwxNS44OTl2ODMuNzE1aDE3LjQzMlYxOTAuODE5eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8'+
			'Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';
		me._stereographic__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;stereographic;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="stereographic";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 400px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stereographic.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stereographic.onmouseover=function (e) {
			me._stereographic__img.style.visibility='hidden';
			me._stereographic__imgo.style.visibility='inherit';
		}
		me._stereographic.onmouseout=function (e) {
			me._stereographic__img.style.visibility='inherit';
			me._stereographic__imgo.style.visibility='hidden';
		}
		me._stereographic.ggUpdatePosition=function (useTransition) {
		}
		el=me._projection_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="projection_buttons";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._projection_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._projection_buttons.onclick=function (e) {
			if (
				(
					(player.getProjection() == 4)
				)
			) {
				player.changeProjectionEx(9,1);
			}
			if (
				(
					(player.getProjection() == 9)
				)
			) {
				player.changeProjectionEx(12,1);
			}
			if (
				(
					(player.getProjection() == 12)
				)
			) {
				player.changeProjectionEx(4,1);
			}
		}
		me._projection_buttons.onmouseover=function (e) {
			me.elementMouseOver['projection_buttons']=true;
			me._tt_projection.logicBlock_visible();
		}
		me._projection_buttons.onmouseout=function (e) {
			me.elementMouseOver['projection_buttons']=false;
			me._tt_projection.logicBlock_visible();
		}
		me._projection_buttons.ontouchend=function (e) {
			me.elementMouseOver['projection_buttons']=false;
			me._tt_projection.logicBlock_visible();
		}
		me._projection_buttons.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_projection=document.createElement('div');
		els=me._tt_projection__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_projection";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_projection.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_projection.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_projection.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_projection.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_projection.style[domTransition]='left 0s, top 0s';
				if (me._tt_projection.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_projection.style.top='-25px';
					me._tt_projection.ggUpdatePosition(true);
				}
				else {
					me._tt_projection.ggDx=0;
					me._tt_projection.style.top='32px';
					me._tt_projection.ggUpdatePosition(true);
				}
			}
		}
		me._tt_projection.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['projection_buttons'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_projection.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_projection.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_projection.style[domTransition]='left 0s, top 0s';
				if (me._tt_projection.ggCurrentLogicStateVisible == 0) {
					me._tt_projection.style.visibility=(Number(me._tt_projection.style.opacity)>0||!me._tt_projection.style.opacity)?'inherit':'hidden';
					me._tt_projection.ggVisible=true;
				}
				else {
					me._tt_projection.style.visibility="hidden";
					me._tt_projection.ggVisible=false;
				}
			}
		}
		me._tt_projection.logicBlock_text = function() {
			var newLogicStateText;
			if (
				(player.getProjection() == 4)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(player.getProjection() == 9)
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(player.getProjection() == 12)
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_projection.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_projection.ggCurrentLogicStateText = newLogicStateText;
				me._tt_projection.style[domTransition]='left 0s, top 0s';
				if (me._tt_projection.ggCurrentLogicStateText == 0) {
					me._tt_projection.ggText="Change to Sterographic";
					me._tt_projection__text.innerHTML=me._tt_projection.ggText;
					if (me._tt_projection.ggUpdateText) {
					me._tt_projection.ggUpdateText=function() {
						var hs="Change to Sterographic";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_projection.ggUpdatePosition) me._tt_projection.ggUpdatePosition();
					}
				}
				else if (me._tt_projection.ggCurrentLogicStateText == 1) {
					me._tt_projection.ggText="Change to Fisheye";
					me._tt_projection__text.innerHTML=me._tt_projection.ggText;
					if (me._tt_projection.ggUpdateText) {
					me._tt_projection.ggUpdateText=function() {
						var hs="Change to Fisheye";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_projection.ggUpdatePosition) me._tt_projection.ggUpdatePosition();
					}
				}
				else if (me._tt_projection.ggCurrentLogicStateText == 2) {
					me._tt_projection.ggText="Change to Rectilinear";
					me._tt_projection__text.innerHTML=me._tt_projection.ggText;
					if (me._tt_projection.ggUpdateText) {
					me._tt_projection.ggUpdateText=function() {
						var hs="Change to Rectilinear";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_projection.ggUpdatePosition) me._tt_projection.ggUpdatePosition();
					}
				}
				else {
					me._tt_projection.ggText="";
					me._tt_projection__text.innerHTML=me._tt_projection.ggText;
					if (me._tt_projection.ggUpdateText) {
					me._tt_projection.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_projection.ggUpdatePosition) me._tt_projection.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_projection.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._projection_buttons.appendChild(me._tt_projection);
		me._stereographic.appendChild(me._projection_buttons);
		me._controller.appendChild(me._stereographic);
		el=me._button_mute=document.createElement('div');
		el.ggId="button_mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 346px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4bWw6c3'+
			'BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0N2MtMS44MzMsMS44My00LjM1MywyLjk1OS03'+
			'LjE0NywyLjk2Yy0yLjc5NS0wLjAwMS01LjMxNC0xLjEzLTcuMTQ2LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MWMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ3eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OT'+
			'sgTTE2LjAzMiw4LjkxN2MtMC40NDMtMC4xODYtMC45NTgtMC4wODctMS4zMDEsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLTAuNjI0LDAuMTI3LTAuODQ2LDAuMzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7cy0wLjM1MSwwLjUzMS0wLjM1MSwwLjg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjI0LDAuMzUxLDAuODQ3czAuNTMxLDAuMzUsMC44NDYsMC4zNWgyLjIzOGwzLjEwMywzLjAzOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4yMjgsMC4yMjMsMC41MzEsMC4zNDEsMC44MzgsMC4zNDFjMC4xNTYsMCwwLjMxMy0wLjAzLDAuNDYyLTAuMDkzYzAuNDQzLTAuMTg2'+
			'LDAuNzMzLTAuNjIyLDAuNzMzLTEuMTAzVjEwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MxNi43NjUsOS41NCwxNi40NzUsOS4xMDMsMTYuMDMyLDguOTE3eiBNMTQuMzcyLDE5LjIyOWwtMS40MTctMS4zODljLTAuMjI2LTAuMjIxLTAuNTIyLTAuMzQxLTAuODM3LTAuMzQxaC0xLjUzMXYtMi45MDVoMS41MzEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMzE1LDAsMC42MTItMC4xMjEsMC44MzctMC4zNDFsMS40MTctMS4zODhWMTkuMjI5eiBNMTkuNTQzLDE4Ljk3OWMwLjc4NC0wLjc0NSwxLjI4LTEuODA3LDEuMjgtMi45NzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMS4xND'+
			'YtMC40NzUtMi4xODktMS4yMy0yLjkzMmMtMC4zNjYtMC4zNi0wLjk1NS0wLjM1NS0xLjMxNSwwLjAxMWMtMC4zNiwwLjM2Ni0wLjM1NSwwLjk1NSwwLjAxMSwxLjMxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40MTgsMC40MTIsMC42NzQsMC45NzUsMC42NzQsMS42MDVjMCwwLjY0My0wLjI2OCwxLjIxNC0wLjcwMiwxLjYzYy0wLjM3MiwwLjM1NC0wLjM4NywwLjk0My0wLjAzMiwxLjMxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xODMsMC4xOTIsMC40MjksMC4yODksMC42NzUsMC4yODlDMTkuMTMzLDE5LjIzNSwxOS4zNjMsMTkuMTUsMTkuNTQzLDE4Ljk3OUwxOS41NDMsMTgu'+
			'OTc5eiBNMjAuNzY2LDkuMTMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40MTQtMC4zMDYtMC45OTYtMC4yMTctMS4zMDEsMC4xOTdjLTAuMzA1LDAuNDE0LTAuMjE3LDAuOTk2LDAuMTk3LDEuMzAxYzEuNjQ5LDEuMjE3LDIuNzE3LDMuMTY0LDIuNzE3LDUuMzY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDIuMjIzLTEuMDg0LDQuMTgzLTIuNzU2LDUuMzk3Yy0wLjQxNywwLjMwMy0wLjUwOSwwLjg4NC0wLjIwNiwxLjMwMWMwLjE4MiwwLjI1LDAuNDY2LDAuMzgzLDAuNzU0LDAuMzgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjE4OSwwLDAuMzgxLTAuMDU4LDAuNTQ2LTAuMT'+
			'c3aC0wLjAwMWMyLjEzMy0xLjU0NywzLjUyNC00LjA2NiwzLjUyNC02LjkwNEMyNC4yNCwxMy4xODMsMjIuODcxLDEwLjY4MSwyMC43NjYsOS4xMzJ6Ii8+CiA8L2c+CiA8ZyBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIj4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTYsMTIuNS0xMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ3Yy0x'+
			'LjgzMywxLjgzLTQuMzUzLDIuOTU5LTcuMTQ3LDIuOTZjLTIuNzk1LTAuMDAxLTUuMzE0LTEuMTMtNy4xNDYtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDd6Ji'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMTYuMDMyLDguOTE3Yy0wLjQ0My0wLjE4Ni0wLjk1OC0wLjA4Ny0xLjMwMSwwLjI0OGwtMy4xMDMsMy4wMzdsLTIuMjM4LDBjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtzLTAuMzUxLDAuNTMxLTAuMzUxLDAuODQ2djUuMjk2YzAsMC4zMTUsMC4xMjgsMC42MjQsMC4zNTEsMC44NDdzMC41MzEsMC4zNSwwLjg0NiwwLjM1aDIuMjM4bDMuMTAzLDMuMDM4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIyOCwwLjIyMywwLjUzMSwwLjM0MSwwLjgzOCwwLjM0MWMwLjE1NiwwLDAuMzEzLTAuMDMs'+
			'MC40NjItMC4wOTNjMC40NDMtMC4xODYsMC43MzMtMC42MjIsMC43MzMtMS4xMDNWMTAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzE2Ljc2NSw5LjU0LDE2LjQ3NSw5LjEwMywxNi4wMzIsOC45MTd6IE0xNC4zNzIsMTkuMjI5bC0xLjQxNy0xLjM4OWMtMC4yMjYtMC4yMjEtMC41MjItMC4zNDEtMC44MzctMC4zNDFoLTEuNTMxdi0yLjkwNWgxLjUzMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zMTUsMCwwLjYxMi0wLjEyMSwwLjgzNy0wLjM0MWwxLjQxNy0xLjM4OFYxOS4yMjl6IE0xOS41NDMsMTguOTc5YzAuNzg0LTAuNzQ1LDEuMjgtMS44MDcsMS4yOC0yLjk3OCYjeGQ7JiN4YT'+
			'smI3g5OyYjeDk7JiN4OTtjMC0xLjE0Ni0wLjQ3NS0yLjE4OS0xLjIzLTIuOTMyYy0wLjM2Ni0wLjM2LTAuOTU1LTAuMzU1LTEuMzE1LDAuMDExYy0wLjM2LDAuMzY2LTAuMzU1LDAuOTU1LDAuMDExLDEuMzE1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQxOCwwLjQxMiwwLjY3NCwwLjk3NSwwLjY3NCwxLjYwNWMwLDAuNjQzLTAuMjY4LDEuMjE0LTAuNzAyLDEuNjNjLTAuMzcyLDAuMzU0LTAuMzg3LDAuOTQzLTAuMDMyLDEuMzE1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjE4MywwLjE5MiwwLjQyOSwwLjI4OSwwLjY3NSwwLjI4OUMxOS4xMzMsMTkuMjM1LDE5LjM2MywxOS4xNSwx'+
			'OS41NDMsMTguOTc5TDE5LjU0MywxOC45Nzl6IE0yMC43NjYsOS4xMzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQxNC0wLjMwNi0wLjk5Ni0wLjIxNy0xLjMwMSwwLjE5N2MtMC4zMDUsMC40MTQtMC4yMTcsMC45OTYsMC4xOTcsMS4zMDFjMS42NDksMS4yMTcsMi43MTcsMy4xNjQsMi43MTcsNS4zNjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMi4yMjMtMS4wODQsNC4xODMtMi43NTYsNS4zOTdjLTAuNDE3LDAuMzAzLTAuNTA5LDAuODg0LTAuMjA2LDEuMzAxYzAuMTgyLDAuMjUsMC40NjYsMC4zODMsMC43NTQsMC4zODMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMTg5LD'+
			'AsMC4zODEtMC4wNTgsMC41NDYtMC4xNzdoLTAuMDAxYzIuMTMzLTEuNTQ3LDMuNTI0LTQuMDY2LDMuNTI0LTYuOTA0QzI0LjI0LDEzLjE4MywyMi44NzEsMTAuNjgxLDIwLjc2Niw5LjEzMnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._unmute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;unmute;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._unmute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4bWw6c3'+
			'BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTYsMTIuNS0xMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MyOC40OTksOS4wOTYs'+
			'MjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ3Yy0xLjgzMywxLjgzLTQuMzUzLDIuOTU5LTcuMTQ3LDIuOTZjLTIuNzk1LTAuMDAxLTUuMzE0LTEuMTMtNy4xNDYtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LD'+
			'E4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDd6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMTYuMDMyLDguOTE3Yy0wLjQ0My0wLjE4Ni0wLjk1OC0wLjA4Ny0xLjMwMSwwLjI0OGwtMy4xMDMsMy4wMzdsLTIuMjM4LDBjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtzLTAuMzUxLDAuNTMxLTAuMzUxLDAuODQ2djUuMjk2YzAsMC4zMTUsMC4xMjgsMC42MjQsMC4zNTEsMC44NDdzMC41MzEsMC4zNSwwLjg0NiwwLjM1aDIuMjM4bDMuMTAzLDMuMDM4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIyOCwwLjIyMywwLjUzMSww'+
			'LjM0MSwwLjgzOCwwLjM0MWMwLjE1NiwwLDAuMzEzLTAuMDMsMC40NjItMC4wOTNjMC40NDMtMC4xODYsMC43MzMtMC42MjIsMC43MzMtMS4xMDNWMTAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzE2Ljc2NSw5LjU0LDE2LjQ3NSw5LjEwMywxNi4wMzIsOC45MTd6IE0xNC4zNzIsMTkuMjI5bC0xLjQxNy0xLjM4OWMtMC4yMjYtMC4yMjEtMC41MjItMC4zNDEtMC44MzctMC4zNDFoLTEuNTMxdi0yLjkwNWgxLjUzMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zMTUsMCwwLjYxMi0wLjEyMSwwLjgzNy0wLjM0MWwxLjQxNy0xLjM4OFYxOS4yMjl6IE0xOS41NDMsMTguOTc5YzAuNzg0LT'+
			'AuNzQ1LDEuMjgtMS44MDcsMS4yOC0yLjk3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0xLjE0Ni0wLjQ3NS0yLjE4OS0xLjIzLTIuOTMyYy0wLjM2Ni0wLjM2LTAuOTU1LTAuMzU1LTEuMzE1LDAuMDExYy0wLjM2LDAuMzY2LTAuMzU1LDAuOTU1LDAuMDExLDEuMzE1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQxOCwwLjQxMiwwLjY3NCwwLjk3NSwwLjY3NCwxLjYwNWMwLDAuNjQzLTAuMjY4LDEuMjE0LTAuNzAyLDEuNjNjLTAuMzcyLDAuMzU0LTAuMzg3LDAuOTQzLTAuMDMyLDEuMzE1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjE4MywwLjE5MiwwLjQyOSwwLjI4OSwwLjY3'+
			'NSwwLjI4OUMxOS4xMzMsMTkuMjM1LDE5LjM2MywxOS4xNSwxOS41NDMsMTguOTc5TDE5LjU0MywxOC45Nzl6IE0yMC43NjYsOS4xMzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQxNC0wLjMwNi0wLjk5Ni0wLjIxNy0xLjMwMSwwLjE5N2MtMC4zMDUsMC40MTQtMC4yMTcsMC45OTYsMC4xOTcsMS4zMDFjMS42NDksMS4yMTcsMi43MTcsMy4xNjQsMi43MTcsNS4zNjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMi4yMjMtMS4wODQsNC4xODMtMi43NTYsNS4zOTdjLTAuNDE3LDAuMzAzLTAuNTA5LDAuODg0LTAuMjA2LDEuMzAxYzAuMTgyLDAuMjUsMC40NjYsMC4zODMsMC43NTQsMC'+
			'4zODMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMTg5LDAsMC4zODEtMC4wNTgsMC41NDYtMC4xNzdoLTAuMDAxYzIuMTMzLTEuNTQ3LDMuNTI0LTQuMDY2LDMuNTI0LTYuOTA0QzI0LjI0LDEzLjE4MywyMi44NzEsMTAuNjgxLDIwLjc2Niw5LjEzMnoiLz4KIDwvZz4KIDxnIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjQ5OSwx'+
			'Mi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0N2MtMS44MzMsMS44My00LjM1MywyLjk1OS03LjE0NywyLjk2Yy0yLjc5NS0wLjAwMS01LjMxNC0xLjEzLTcuMTQ2LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Ji'+
			'N4OTtjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MWMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ3eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE2LjAzMiw4LjkxN2MtMC40NDMtMC4xODYtMC45NTgtMC4wODctMS4zMDEsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLTAuNjI0LDAuMTI3LTAuODQ2LDAuMzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7cy0wLjM1MSwwLjUzMS0wLjM1MSwwLjg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjI0LDAuMzUxLDAuODQ3czAu'+
			'NTMxLDAuMzUsMC44NDYsMC4zNWgyLjIzOGwzLjEwMywzLjAzOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4yMjgsMC4yMjMsMC41MzEsMC4zNDEsMC44MzgsMC4zNDFjMC4xNTYsMCwwLjMxMy0wLjAzLDAuNDYyLTAuMDkzYzAuNDQzLTAuMTg2LDAuNzMzLTAuNjIyLDAuNzMzLTEuMTAzVjEwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MxNi43NjUsOS41NCwxNi40NzUsOS4xMDMsMTYuMDMyLDguOTE3eiBNMTQuMzcyLDE5LjIyOWwtMS40MTctMS4zODljLTAuMjI2LTAuMjIxLTAuNTIyLTAuMzQxLTAuODM3LTAuMzQxaC0xLjUzMXYtMi45MDVoMS41MzEmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7YzAuMzE1LDAsMC42MTItMC4xMjEsMC44MzctMC4zNDFsMS40MTctMS4zODhWMTkuMjI5eiBNMTkuNTQzLDE4Ljk3OWMwLjc4NC0wLjc0NSwxLjI4LTEuODA3LDEuMjgtMi45NzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMS4xNDYtMC40NzUtMi4xODktMS4yMy0yLjkzMmMtMC4zNjYtMC4zNi0wLjk1NS0wLjM1NS0xLjMxNSwwLjAxMWMtMC4zNiwwLjM2Ni0wLjM1NSwwLjk1NSwwLjAxMSwxLjMxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40MTgsMC40MTIsMC42NzQsMC45NzUsMC42NzQsMS42MDVjMCwwLjY0My0wLjI2OCwxLjIxNC0wLjcwMiwxLjYzYy0wLjM3Miww'+
			'LjM1NC0wLjM4NywwLjk0My0wLjAzMiwxLjMxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xODMsMC4xOTIsMC40MjksMC4yODksMC42NzUsMC4yODlDMTkuMTMzLDE5LjIzNSwxOS4zNjMsMTkuMTUsMTkuNTQzLDE4Ljk3OUwxOS41NDMsMTguOTc5eiBNMjAuNzY2LDkuMTMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40MTQtMC4zMDYtMC45OTYtMC4yMTctMS4zMDEsMC4xOTdjLTAuMzA1LDAuNDE0LTAuMjE3LDAuOTk2LDAuMTk3LDEuMzAxYzEuNjQ5LDEuMjE3LDIuNzE3LDMuMTY0LDIuNzE3LDUuMzY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDIuMjIzLTEuMDg0LDQuMT'+
			'gzLTIuNzU2LDUuMzk3Yy0wLjQxNywwLjMwMy0wLjUwOSwwLjg4NC0wLjIwNiwxLjMwMWMwLjE4MiwwLjI1LDAuNDY2LDAuMzgzLDAuNzU0LDAuMzgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjE4OSwwLDAuMzgxLTAuMDU4LDAuNTQ2LTAuMTc3aC0wLjAwMWMyLjEzMy0xLjU0NywzLjUyNC00LjA2NiwzLjUyNC02LjkwNEMyNC4yNCwxMy4xODMsMjIuODcxLDEwLjY4MSwyMC43NjYsOS4xMzJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._unmute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;unmute;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="unmute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute.onclick=function (e) {
			player.setVolume("_main",0.01);
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility='hidden';
			me._unmute.ggVisible=false;
			me._mute.style[domTransition]='none';
			me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
			me._mute.ggVisible=true;
		}
		me._unmute.onmouseover=function (e) {
			me._unmute__img.style.visibility='hidden';
			me._unmute__imgo.style.visibility='inherit';
		}
		me._unmute.onmouseout=function (e) {
			me._unmute__img.style.visibility='inherit';
			me._unmute__imgo.style.visibility='hidden';
		}
		me._unmute.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute.appendChild(me._unmute);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4bWw6c3'+
			'BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTE2LjAzMSw4LjkxN2MtMC40NDItMC4xODYtMC45NTgtMC4wODctMS4zLDAuMjQ4bC0zLjEwMywzLjAzN2wtMi4yMzgsMGMtMC4zMTUsMC0wLjYyNCwwLjEyNy0wLjg0NiwwLjM1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4yMjMsMC4yMjMtMC4zNTEsMC41MzEtMC4zNTEsMC44NDZ2NS4yOTZjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSww'+
			'Ljg0N2MwLjIyMywwLjIyMiwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyLjIzOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMy4xMDMsMy4wMzdjMC4yMjcsMC4yMjMsMC41MywwLjM0MSwwLjgzOCwwLjM0MWMwLjE1NiwwLDAuMzEzLTAuMDMsMC40NjItMC4wOTNjMC40NDMtMC4xODcsMC43MzMtMC42MjMsMC43MzMtMS4xMDNWMTAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzE2Ljc2NCw5LjUzOSwxNi40NzQsOS4xMDMsMTYuMDMxLDguOTE3eiBNMTQuMzcyLDE5LjIyOGwtMS40MTgtMS4zODhjLTAuMjI1LTAuMjIxLTAuNTIyLTAuMzQyLTAuODM3LTAuMzQyaC0xLjUzdi0yLjkwNGgxLj'+
			'UzMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zMTUsMCwwLjYxMi0wLjEyMSwwLjgzNy0wLjM0MWwxLjQxOC0xLjM4OFYxOS4yMjh6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZD'+
			'Ny4wMjIsMjEuMzEzLDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2YzIuNzk1LDAsNS4zMTMsMS4xMyw3LjE0NywyLjk2YzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxMywyMy4xNDcsMjMuMTQ2eiBNMjIuMzI3LDE2LjAzMWwxLjQ4NS0xLjQ4NWMwLjM2My0wLjM2NCwwLjM2My0wLjk1MywwLTEuMzE2JiN4ZDsmI3hhOyYjeDk7Ji'+
			'N4OTsmI3g5O2MtMC4zNjQtMC4zNjMtMC45NTMtMC4zNjMtMS4zMTUsMGwtMS40ODUsMS40ODVsLTEuNDg1LTEuNDg1Yy0wLjM2My0wLjM2My0wLjk1Mi0wLjM2My0xLjMxNiwwYy0wLjM2MiwwLjM2NC0wLjM2MiwwLjk1MywwLDEuMzE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wxLjQ4NSwxLjQ4NWwtMS40ODUsMS40ODVjLTAuMzYyLDAuMzYyLTAuMzYyLDAuOTUyLDAsMS4zMTVjMC4xODMsMC4xODIsMC40MiwwLjI3MiwwLjY1OCwwLjI3MnMwLjQ3Ny0wLjA5MSwwLjY1OC0wLjI3MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS40ODUtMS40ODVsMS40ODUsMS40ODVjMC4xODEsMC4xODIs'+
			'MC40MTksMC4yNzIsMC42NTcsMC4yNzJzMC40NzctMC4wOTEsMC42NTgtMC4yNzJjMC4zNjMtMC4zNjMsMC4zNjMtMC45NTMsMC0xLjMxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMMjIuMzI3LDE2LjAzMXoiLz4KIDwvZz4KIDxnIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiPgogIDxwYXRoIGQ9Ik0xNi4wMzEsOC45MTdjLTAuNDQyLTAuMTg2LTAuOTU4LTAuMDg3LTEuMywwLjI0OGwtMy4xMDMsMy4wMzdsLTIuMjM4LDBjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMjIzLDAuMjIzLT'+
			'AuMzUxLDAuNTMxLTAuMzUxLDAuODQ2djUuMjk2YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDdjMC4yMjMsMC4yMjIsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMi4yMzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDMuMTAzLDMuMDM3YzAuMjI3LDAuMjIzLDAuNTMsMC4zNDEsMC44MzgsMC4zNDFjMC4xNTYsMCwwLjMxMy0wLjAzLDAuNDYyLTAuMDkzYzAuNDQzLTAuMTg3LDAuNzMzLTAuNjIzLDAuNzMzLTEuMTAzVjEwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MxNi43NjQsOS41MzksMTYuNDc0LDkuMTAzLDE2LjAzMSw4LjkxN3ogTTE0LjM3MiwxOS4yMjhsLTEuNDE4LTEu'+
			'Mzg4Yy0wLjIyNS0wLjIyMS0wLjUyMi0wLjM0Mi0wLjgzNy0wLjM0MmgtMS41M3YtMi45MDRoMS41MzEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMzE1LDAsMC42MTItMC4xMjEsMC44MzctMC4zNDFsMS40MTgtMS4zODhWMTkuMjI4eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ2Yy0xLjgzMywxLjgzMS00LjM1MywyLjk2LTcuMT'+
			'Q3LDIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxMyw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NmMyLjc5NSwwLDUuMzEzLDEuMTMsNy4xNDcsMi45NmMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTMsMjMuMTQ3LDIzLjE0NnogTTIyLjMyNywxNi4wMzFsMS40'+
			'ODUtMS40ODVjMC4zNjMtMC4zNjQsMC4zNjMtMC45NTMsMC0xLjMxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMzY0LTAuMzYzLTAuOTUzLTAuMzYzLTEuMzE1LDBsLTEuNDg1LDEuNDg1bC0xLjQ4NS0xLjQ4NWMtMC4zNjMtMC4zNjMtMC45NTItMC4zNjMtMS4zMTYsMGMtMC4zNjIsMC4zNjQtMC4zNjIsMC45NTMsMCwxLjMxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS40ODUsMS40ODVsLTEuNDg1LDEuNDg1Yy0wLjM2MiwwLjM2Mi0wLjM2MiwwLjk1MiwwLDEuMzE1YzAuMTgzLDAuMTgyLDAuNDIsMC4yNzIsMC42NTgsMC4yNzJzMC40NzctMC4wOTEsMC42NTgtMC4yNzImI3hkOy'+
			'YjeGE7JiN4OTsmI3g5OyYjeDk7bDEuNDg1LTEuNDg1bDEuNDg1LDEuNDg1YzAuMTgxLDAuMTgyLDAuNDE5LDAuMjcyLDAuNjU3LDAuMjcyczAuNDc3LTAuMDkxLDAuNjU4LTAuMjcyYzAuMzYzLTAuMzYzLDAuMzYzLTAuOTUzLDAtMS4zMTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TDIyLjMyNywxNi4wMzF6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._mute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;mute;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._mute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiB3aWR0aD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4bWw6c3'+
			'BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMTYuMDMxLDguOTE3Yy0wLjQ0Mi0wLjE4Ni0wLjk1OC0wLjA4Ny0xLjMsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLTAuNjI0LDAuMTI3LTAuODQ2LDAuMzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjIyMywwLjIy'+
			'My0wLjM1MSwwLjUzMS0wLjM1MSwwLjg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ3YzAuMjIzLDAuMjIyLDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIuMjM4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wzLjEwMywzLjAzN2MwLjIyNywwLjIyMywwLjUzLDAuMzQxLDAuODM4LDAuMzQxYzAuMTU2LDAsMC4zMTMtMC4wMywwLjQ2Mi0wLjA5M2MwLjQ0My0wLjE4NywwLjczMy0wLjYyMywwLjczMy0xLjEwM1YxMC4wMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTYuNzY0LDkuNTM5LDE2LjQ3NCw5LjEwMywxNi4wMzEsOC45MTd6IE0xNC4zNzIsMTkuMjI4bC0xLjQxOC'+
			'0xLjM4OGMtMC4yMjUtMC4yMjEtMC41MjItMC4zNDItMC44MzctMC4zNDJoLTEuNTN2LTIuOTA0aDEuNTMxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMxNSwwLDAuNjEyLTAuMTIxLDAuODM3LTAuMzQxbDEuNDE4LTEuMzg4VjE5LjIyOHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03'+
			'LjE0NywyLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3MtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTMsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTZjMi43OTUsMCw1LjMxMywxLjEzLDcuMTQ3LDIuOTZjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzEzLDIzLjE0NywyMy4xNDZ6IE0yMi4zMjcsMTYuMDMxbD'+
			'EuNDg1LTEuNDg1YzAuMzYzLTAuMzY0LDAuMzYzLTAuOTUzLDAtMS4zMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjM2NC0wLjM2My0wLjk1My0wLjM2My0xLjMxNSwwbC0xLjQ4NSwxLjQ4NWwtMS40ODUtMS40ODVjLTAuMzYzLTAuMzYzLTAuOTUyLTAuMzYzLTEuMzE2LDBjLTAuMzYyLDAuMzY0LTAuMzYyLDAuOTUzLDAsMS4zMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDEuNDg1LDEuNDg1bC0xLjQ4NSwxLjQ4NWMtMC4zNjIsMC4zNjItMC4zNjIsMC45NTIsMCwxLjMxNWMwLjE4MywwLjE4MiwwLjQyLDAuMjcyLDAuNjU4LDAuMjcyczAuNDc3LTAuMDkxLDAuNjU4LTAuMjcyJiN4'+
			'ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wxLjQ4NS0xLjQ4NWwxLjQ4NSwxLjQ4NWMwLjE4MSwwLjE4MiwwLjQxOSwwLjI3MiwwLjY1NywwLjI3MnMwLjQ3Ny0wLjA5MSwwLjY1OC0wLjI3MmMwLjM2My0wLjM2MywwLjM2My0wLjk1MywwLTEuMzE1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wyMi4zMjcsMTYuMDMxeiIvPgogPC9nPgogPGcgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMTYuMDMxLDguOTE3Yy0wLjQ0Mi0wLj'+
			'E4Ni0wLjk1OC0wLjA4Ny0xLjMsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLTAuNjI0LDAuMTI3LTAuODQ2LDAuMzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjIyMywwLjIyMy0wLjM1MSwwLjUzMS0wLjM1MSwwLjg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ3YzAuMjIzLDAuMjIyLDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIuMjM4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wzLjEwMywzLjAzN2MwLjIyNywwLjIyMywwLjUzLDAuMzQxLDAuODM4LDAuMzQxYzAuMTU2LDAsMC4zMTMtMC4wMywwLjQ2Mi0wLjA5M2MwLjQ0My0wLjE4Nyww'+
			'LjczMy0wLjYyMywwLjczMy0xLjEwM1YxMC4wMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTYuNzY0LDkuNTM5LDE2LjQ3NCw5LjEwMywxNi4wMzEsOC45MTd6IE0xNC4zNzIsMTkuMjI4bC0xLjQxOC0xLjM4OGMtMC4yMjUtMC4yMjEtMC41MjItMC4zNDItMC44MzctMC4zNDJoLTEuNTN2LTIuOTA0aDEuNTMxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMxNSwwLDAuNjEyLTAuMTIxLDAuODM3LTAuMzQxbDEuNDE4LTEuMzg4VjE5LjIyOHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3MtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTMsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTZjMi43OTUsMCw1LjMxMywxLjEzLDcuMTQ3LDIuOTZjMS44'+
			'MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzEzLDIzLjE0NywyMy4xNDZ6IE0yMi4zMjcsMTYuMDMxbDEuNDg1LTEuNDg1YzAuMzYzLTAuMzY0LDAuMzYzLTAuOTUzLDAtMS4zMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjM2NC0wLjM2My0wLjk1My0wLjM2My0xLjMxNSwwbC0xLjQ4NSwxLjQ4NWwtMS40ODUtMS40ODVjLTAuMzYzLTAuMzYzLTAuOTUyLTAuMzYzLTEuMzE2LDBjLTAuMzYyLDAuMzY0LTAuMzYyLDAuOTUzLDAsMS4zMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDEuND'+
			'g1LDEuNDg1bC0xLjQ4NSwxLjQ4NWMtMC4zNjIsMC4zNjItMC4zNjIsMC45NTIsMCwxLjMxNWMwLjE4MywwLjE4MiwwLjQyLDAuMjcyLDAuNjU4LDAuMjcyczAuNDc3LTAuMDkxLDAuNjU4LTAuMjcyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wxLjQ4NS0xLjQ4NWwxLjQ4NSwxLjQ4NWMwLjE4MSwwLjE4MiwwLjQxOSwwLjI3MiwwLjY1NywwLjI3MnMwLjQ3Ny0wLjA5MSwwLjY1OC0wLjI3MmMwLjM2My0wLjM2MywwLjM2My0wLjk1MywwLTEuMzE1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wyMi4zMjcsMTYuMDMxeiIvPgogPC9nPgo8L3N2Zz4K';
		me._mute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;mute;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="mute";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute.onclick=function (e) {
			player.setVolume("_main",0);
			me._mute.style[domTransition]='none';
			me._mute.style.visibility='hidden';
			me._mute.ggVisible=false;
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility=(Number(me._unmute.style.opacity)>0||!me._unmute.style.opacity)?'inherit':'hidden';
			me._unmute.ggVisible=true;
		}
		me._mute.onmouseover=function (e) {
			me._mute__img.style.visibility='hidden';
			me._mute__imgo.style.visibility='inherit';
		}
		me._mute.onmouseout=function (e) {
			me._mute__img.style.visibility='inherit';
			me._mute__imgo.style.visibility='hidden';
		}
		me._mute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._button_mute.appendChild(me._mute);
		me._controller.appendChild(me._button_mute);
		me._container_2.appendChild(me._controller);
		me._ui0.appendChild(me._container_2);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_thumbnail_menu';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 131px;';
		hs+='left : 50%;';
		hs+='margin-left : -98.5px;';
		hs+='margin-top : -65.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 197px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.offsetWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.offsetWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.offsetHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.offsetHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			me._thumbnail_menu.ggDragLastY = t[0].clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
			}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggDragLastY = t[0].clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 720px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 720px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 130px;';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumbnail_menu.style.bottom='80px';
					me._thumbnail_menu.ggUpdatePosition(true);
				}
				else {
					me._thumbnail_menu.ggDx=0;
					me._thumbnail_menu.style.bottom='130px';
					me._thumbnail_menu.ggUpdatePosition(true);
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_thumbnail_menu') == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu.style.visibility="hidden";
					me._thumbnail_menu.style.opacity=0;
				}
				else {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
			}
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var containerWidth = offsetWidthWithScale;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = (contentWidth/-2) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.offsetHeight;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = (contentHeight/-2) + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > offsetWidthWithScale) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.offsetWidth - 15;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.offsetWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.offsetWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 172;
		el.ggHeight = 120;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			el.ggInstances = [];
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			el.ggCurrentFilter = filter;
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = el.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= numRows) {
					row = 0;
					column++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_changenode();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 172px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._thumbnail_cloner.ggLastSize) || (me._thumbnail_cloner.ggLastSize.w!=w) || (me._thumbnail_cloner.ggLastSize.h!=h)) {
				me._thumbnail_cloner.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner.ggUpdate();
			}
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me._ui0.appendChild(me._thumbnail_menu);
		me.__6.appendChild(me._ui0);
		el=me.__10=document.createElement('div');
		el.ggId="\u52a8\u6001\u54cd\u5e94\u680f";
		el.ggDx=1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._timer=document.createElement('div');
		el.ggId="timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 55px;';
		hs+='position : absolute;';
		hs+='top : 44px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer.ggUpdatePosition=function (useTransition) {
		}
		el=me._timer_black=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="timer_black";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 113px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_black.ggIsActive=function() {
			return (me._timer_black.ggTimestamp + me._timer_black.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me._timer_black.ggIsActive() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_black.style[domTransition]='';
				if (me._timer_black.ggCurrentLogicStateVisible == 0) {
					me._timer_black.style.visibility="hidden";
					me._timer_black.ggVisible=false;
				}
				else {
					me._timer_black.style.visibility=(Number(me._timer_black.style.opacity)>0||!me._timer_black.style.opacity)?'inherit':'hidden';
					me._timer_black.ggVisible=true;
				}
			}
		}
		me._timer_black.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._svg_black_over.style[domTransition]='none';
			} else {
				me._svg_black_over.style[domTransition]='all 2000ms ease-out 0ms';
			}
			me._svg_black_over.ggParameter.rx=-482;me._svg_black_over.ggParameter.ry=0;
			me._svg_black_over.style[domTransform]=parameterToTransform(me._svg_black_over.ggParameter);
			if (player.transitionsDisabled) {
				me._svg_black_under.style[domTransition]='none';
			} else {
				me._svg_black_under.style[domTransition]='all 2000ms ease-out 0ms';
			}
			me._svg_black_under.ggParameter.rx=-482;me._svg_black_under.ggParameter.ry=0;
			me._svg_black_under.style[domTransform]=parameterToTransform(me._svg_black_under.ggParameter);
		}
		me._timer_black.ggCurrentLogicStateVisible = -1;
		me._timer_black.ggUpdateConditionTimer=function () {
			me._timer_black.logicBlock_visible();
		}
		me._timer_black.ggUpdatePosition=function (useTransition) {
		}
		me._timer.appendChild(me._timer_black);
		el=me._timer_green=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="timer_green";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 116px;';
		hs+='position : absolute;';
		hs+='top : 65px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_green.ggIsActive=function() {
			return (me._timer_green.ggTimestamp + me._timer_green.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_green.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me._timer_green.ggIsActive() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_green.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_green.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_green.style[domTransition]='';
				if (me._timer_green.ggCurrentLogicStateVisible == 0) {
					me._timer_green.style.visibility="hidden";
					me._timer_green.ggVisible=false;
				}
				else {
					me._timer_green.style.visibility=(Number(me._timer_green.style.opacity)>0||!me._timer_green.style.opacity)?'inherit':'hidden';
					me._timer_green.ggVisible=true;
				}
			}
		}
		me._timer_green.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._image_4.style[domTransition]='none';
			} else {
				me._image_4.style[domTransition]='all 2000ms ease-out 0ms';
			}
			me._image_4.ggParameter.rx=-482;me._image_4.ggParameter.ry=0;
			me._image_4.style[domTransform]=parameterToTransform(me._image_4.ggParameter);
		}
		me._timer_green.ggCurrentLogicStateVisible = -1;
		me._timer_green.ggUpdateConditionTimer=function () {
			me._timer_green.logicBlock_visible();
		}
		me._timer_green.ggUpdatePosition=function (useTransition) {
		}
		me._timer.appendChild(me._timer_green);
		el=me._timer_yellow=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="timer_yellow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 117px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_yellow.ggIsActive=function() {
			return (me._timer_yellow.ggTimestamp + me._timer_yellow.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_yellow.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me._timer_yellow.ggIsActive() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_yellow.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_yellow.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_yellow.style[domTransition]='';
				if (me._timer_yellow.ggCurrentLogicStateVisible == 0) {
					me._timer_yellow.style.visibility="hidden";
					me._timer_yellow.ggVisible=false;
				}
				else {
					me._timer_yellow.style.visibility=(Number(me._timer_yellow.style.opacity)>0||!me._timer_yellow.style.opacity)?'inherit':'hidden';
					me._timer_yellow.ggVisible=true;
				}
			}
		}
		me._timer_yellow.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._image_5.style[domTransition]='none';
			} else {
				me._image_5.style[domTransition]='all 3000ms ease-out 0ms';
			}
			me._image_5.ggParameter.rx=-482;me._image_5.ggParameter.ry=0;
			me._image_5.style[domTransform]=parameterToTransform(me._image_5.ggParameter);
			if (player.transitionsDisabled) {
				me._image_6.style[domTransition]='none';
			} else {
				me._image_6.style[domTransition]='all 3000ms ease-out 0ms';
			}
			me._image_6.ggParameter.rx=-482;me._image_6.ggParameter.ry=0;
			me._image_6.style[domTransform]=parameterToTransform(me._image_6.ggParameter);
		}
		me._timer_yellow.ggCurrentLogicStateVisible = -1;
		me._timer_yellow.ggUpdateConditionTimer=function () {
			me._timer_yellow.logicBlock_visible();
		}
		me._timer_yellow.ggUpdatePosition=function (useTransition) {
		}
		me._timer.appendChild(me._timer_yellow);
		el=me._timer_text=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="timer_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 148px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_text.ggIsActive=function() {
			return (me._timer_text.ggTimestamp + me._timer_text.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_text.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me._timer_text.ggIsActive() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_text.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_text.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_text.style[domTransition]='';
				if (me._timer_text.ggCurrentLogicStateVisible == 0) {
					me._timer_text.style.visibility="hidden";
					me._timer_text.ggVisible=false;
				}
				else {
					me._timer_text.style.visibility=(Number(me._timer_text.style.opacity)>0||!me._timer_text.style.opacity)?'inherit':'hidden';
					me._timer_text.ggVisible=true;
				}
			}
		}
		me._timer_text.ggDeactivate=function () {
			me._txt_main.style[domTransition]='none';
			me._txt_main.style.opacity='1';
			me._txt_main.style.visibility=me._txt_main.ggVisible?'inherit':'hidden';
			me._txt_title.style[domTransition]='none';
			me._txt_title.style.opacity='1';
			me._txt_title.style.visibility=me._txt_title.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._txt_title.style[domTransition]='none';
			} else {
				me._txt_title.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._txt_title.ggParameter.rx=0;me._txt_title.ggParameter.ry=40;
			me._txt_title.style[domTransform]=parameterToTransform(me._txt_title.ggParameter);
		}
		me._timer_text.ggCurrentLogicStateVisible = -1;
		me._timer_text.ggUpdateConditionTimer=function () {
			me._timer_text.logicBlock_visible();
		}
		me._timer_text.ggUpdatePosition=function (useTransition) {
		}
		me._timer.appendChild(me._timer_text);
		el=me._timer_text_link=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="timer_text_link";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 125px;';
		hs+='position : absolute;';
		hs+='top : 192px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_text_link.ggIsActive=function() {
			return (me._timer_text_link.ggTimestamp + me._timer_text_link.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_text_link.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me._timer_text_link.ggIsActive() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_text_link.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_text_link.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_text_link.style[domTransition]='';
				if (me._timer_text_link.ggCurrentLogicStateVisible == 0) {
					me._timer_text_link.style.visibility="hidden";
					me._timer_text_link.ggVisible=false;
				}
				else {
					me._timer_text_link.style.visibility=(Number(me._timer_text_link.style.opacity)>0||!me._timer_text_link.style.opacity)?'inherit':'hidden';
					me._timer_text_link.ggVisible=true;
				}
			}
		}
		me._timer_text_link.ggDeactivate=function () {
			me._txt_link.style[domTransition]='none';
			me._txt_link.style.opacity='1';
			me._txt_link.style.visibility=me._txt_link.ggVisible?'inherit':'hidden';
		}
		me._timer_text_link.ggCurrentLogicStateVisible = -1;
		me._timer_text_link.ggUpdateConditionTimer=function () {
			me._timer_text_link.logicBlock_visible();
		}
		me._timer_text_link.ggUpdatePosition=function (useTransition) {
		}
		me._timer.appendChild(me._timer_text_link);
		el=me._timer_close=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="timer_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 244px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_close.ggIsActive=function() {
			return (me._timer_close.ggTimestamp + me._timer_close.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me._timer_close.ggIsActive() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_close.style[domTransition]='';
				if (me._timer_close.ggCurrentLogicStateVisible == 0) {
					me._timer_close.style.visibility="hidden";
					me._timer_close.ggVisible=false;
				}
				else {
					me._timer_close.style.visibility=(Number(me._timer_close.style.opacity)>0||!me._timer_close.style.opacity)?'inherit':'hidden';
					me._timer_close.ggVisible=true;
				}
			}
		}
		me._timer_close.ggDeactivate=function () {
			me.__10.style[domTransition]='none';
			me.__10.style.opacity='0';
			me.__10.style.visibility='hidden';
		}
		me._timer_close.ggCurrentLogicStateVisible = -1;
		me._timer_close.ggUpdateConditionTimer=function () {
			me._timer_close.logicBlock_visible();
		}
		me._timer_close.ggUpdatePosition=function (useTransition) {
		}
		me._timer.appendChild(me._timer_close);
		me.__10.appendChild(me._timer);
		el=me._responseinformation=document.createElement('div');
		el.ggId="responseInformation";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._responseinformation.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._responseinformation.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 30;';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : -482px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._responseinformation.appendChild(me._image_4);
		el=me._con_svg_black=document.createElement('div');
		el.ggId="con_svg_black";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : -482px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._con_svg_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._con_svg_black.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_black_under=document.createElement('div');
		els=me._svg_black_under__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0ODIgMTIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODIgMTIwOyIgeG1sOnNwYWNlPS'+
			'JwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0MXtmaWxsOnVybCgjU1ZHSURfMl8pO30KPC9zdHlsZT4KPGcgaWQ9IkJsYWNrIj4KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNjIuOTc0NiIgeTE9IjU2LjEzODkiIHgyPSIyNzcuNTE3NiIgeTI9IjU2LjEzODkiPgoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMzEzMTgiLz4KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMjQzMDMwIi8+Cgk8L2xpbmVh'+
			'ckdyYWRpZW50PgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTMsMTcuNSAyNzcuNSw5NC44IDE1OC40LDk0LjggNjMsMTcuNSAJIi8+Cgk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE5Ljg5NDUiIHkxPSI3OC4yMjA1IiB4Mj0iNDEuMjQwMiIgeTI9Ijc4LjIyMDUiPgoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMzEzMTgiLz4KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMjQzMDMwIi8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBvbHlnb24gY2xhc3M9InN0MS'+
			'IgcG9pbnRzPSIyNiw5NC4xIDE5LjksNjIuNCA0MS4yLDYyLjQgCSIvPgo8L2c+Cjwvc3ZnPgo=';
		me._svg_black_under__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_black_under;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_black_under__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0ODIgMTIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODIgMTIwOyIgeG1sOnNwYWNlPS'+
			'JwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0MXtmaWxsOnVybCgjU1ZHSURfMl8pO30KPC9zdHlsZT4KPGcgaWQ9IkJsYWNrIj4KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNjIuOTc0NiIgeTE9IjU2LjEzODkiIHgyPSIyNzcuNTE3NiIgeTI9IjU2LjEzODkiPgoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMzEzMTgiLz4KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMjQzMDMwIi8+Cgk8L2xpbmVh'+
			'ckdyYWRpZW50PgoJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxNTMsMTcuNSAyNzcuNSw5NC44IDE1OC40LDk0LjggNjMsMTcuNSAJIi8+Cgk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE5Ljg5NDUiIHkxPSI3OC4yMjA1IiB4Mj0iNDEuMjQwMiIgeTI9Ijc4LjIyMDUiPgoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMxMzEzMTgiLz4KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMjQzMDMwIi8+Cgk8L2xpbmVhckdyYWRpZW50PgoJPHBvbHlnb24gY2xhc3M9InN0MS'+
			'IgcG9pbnRzPSIyNiw5NC4xIDE5LjksNjIuNCA0MS4yLDYyLjQgCSIvPgo8L2c+Cjwvc3ZnPgo=';
		me._svg_black_under__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;svg_black_under;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="svg_black_under";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 20;';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_black_under.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_black_under.onmouseover=function (e) {
			me._svg_black_under__img.style.visibility='hidden';
			me._svg_black_under__imgo.style.visibility='inherit';
		}
		me._svg_black_under.onmouseout=function (e) {
			me._svg_black_under__img.style.visibility='inherit';
			me._svg_black_under__imgo.style.visibility='hidden';
		}
		me._svg_black_under.ggUpdatePosition=function (useTransition) {
		}
		me._con_svg_black.appendChild(me._svg_black_under);
		el=me._svg_black_over=document.createElement('div');
		els=me._svg_black_over__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0ODIgMTIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODIgMTIwOyIgeG1sOnNwYWNlPS'+
			'JwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0MXtmaWxsOnVybCgjU1ZHSURfMl8pO30KCS5zdDJ7ZmlsbDp1cmwoI1NWR0lEXzNfKTt9Cgkuc3Qze2ZpbGw6dXJsKCNTVkdJRF80Xyk7fQo8L3N0eWxlPgo8ZyBpZD0iQmxhY2siPgoJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNy4zMDUxIiB5MT0iOTYuNTc5IiB4Mj0iMTQ2LjQyNTYiIHkyPSIxNi4wNjI0Ij4KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MDQ2Ii8+CgkJ'+
			'PHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzI0MzAzMCIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNjMsMTcuNSAyNi4xLDk0LjEgMTEyLjMsOTQuMSAxNTMsMTcuNSAJIi8+Cgk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI4NC4yMDA0IiB5MT0iNDMuMjA1MSIgeDI9IjIxNS4yNDUyIiB5Mj0iLTEuMDkzNSI+CgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzM3NDA0NiIvPgoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLW'+
			'NvbG9yOiMyNDMwMzAiLz4KCTwvbGluZWFyR3JhZGllbnQ+Cgk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjE1OC40LDk0LjggMTk2LjUsMjUuMSA0NjIuMSwyNS4xIDQzMS43LDk0LjggCSIvPgoJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8zXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0MTYuNTQ2NSIgeTE9IjExNi4xNTEzIiB4Mj0iMzM2LjYzODMiIHkyPSI3My44OTYiPgoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNzQwNDYiLz4KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMjQzMDMwIi8+Cgk8L2xpbmVh'+
			'ckdyYWRpZW50PgoJPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSI0NjIuMSwyNS4xIDE1OC40LDk0LjggNDMxLjcsOTQuOCAJIi8+Cgk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzRfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjExNS42NTUzIiB5MT0iOTcuODAxNCIgeDI9IjgzLjE4NTciIHkyPSI0NS41OTUzIj4KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMzc0MDQ2Ii8+CgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzI0MzAzMCIvPgoJPC9saW5lYXJHcmFkaWVudD4KCTxwb2x5Z29uIGNsYXNzPSJzdDMiIHBvaW'+
			'50cz0iMjYuMSw5NC4xIDE1MywxNy41IDExMi4zLDk0LjEgCSIvPgo8L2c+Cjwvc3ZnPgo=';
		me._svg_black_over__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_black_over;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="svg_black_over";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 40;';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_black_over.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_black_over.ggUpdatePosition=function (useTransition) {
		}
		me._con_svg_black.appendChild(me._svg_black_over);
		me._responseinformation.appendChild(me._con_svg_black);
		el=me._con_svg_yellow=document.createElement('div');
		el.ggId="con_svg_yellow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : -482px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._con_svg_yellow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._con_svg_yellow.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeIAAAB4CAYAAAAuY/EyAAAEv0lEQVR4nO3dP4tjVRzH4e9JZsRisRa0sNnCcVCUBUHE3sJSW8VXIXYWtsIqLKhvwDexYGG7Iv5ZFxsLX8ZOci0mN5O9OWH/ZNxfZn0eCDOcOUlu95nzy9zdNgxDAIAas+oLAID/MyEGgEJCDACFhBgACgkxABQSYgAoJMQAUEiIAaCQEANAISEGgEJCDACFhBgACgkxABQSYgAoJMQAUEiIAaCQEANAISEGgEJCDACFhBgACgkxABQSYgAoJMQAUEiIAaCQEANAISEGgEJCDACFhBgACgkxABQSYgAoJMQAUEiIAaCQEANAISEGgEJCDACFhBgACgkxABQSYgAoJMQAUEiIAaCQEANAISEGgEJCDACFhBgACgkxABQSYgAoJMQAUEiIAaCQEANAIS'+
			'EGgEJCDACFhBgACgkxABQSYgAoJMQAUEiIAaCQEANAISEGgEJCDACFhBgACgkxABQSYgAoJMQAUEiIAaCQEANAISEGgEJCDACFhBgACgkxABQSYgAoJMQAUEiIAaCQEANAISEGgEJCDACFhBgACgkxABQSYgAoJMQAUEiIAaCQEANAISEGgEJCDACFhBgACh1VXwAcor/fau8lmbUkbZ60lrTVz9r4aBffZ3NtvnvvdG38VXj9vGFj38brj2uH5vj28GP1NcBVJ8TQcXY//7Tk5uwoH7TFRgw3otyN5pC0s9XaZG8yCfiQZPXaackwrOKcB6O8XstBRvnALgeunjYMQ/U1wMFpq/r9dZpPW3IzybXZ0eQUPM/WqbUXzfHk2zvhdk+980mwZxuv2TmFVzq+PVRfAlx5QgwdY4iT5N5pXm7JVy35cIzhbDVLWkf06NHH'+
			'0W0+WcvugA+z7Sgf0uhaiGF/QgwdmyEe3TvN+y251ZJXkotAzjYjPDklb+7bWnvIZ8/TtfFUvX6fAxhdCzHsT4ihoxfiJPnzNNeSfNOST6bhe5TR9flrd9YeY+90dJ1JlKcR/y8JMexPiKFjV4hHd1/Lx63l65a8kGyPlLfCOh1lZ/c4uvd58uOMrpPJWi7WLpsQw/6EGDoeFuIk+eMkLya52Vo+6o6eczG6Xq89Y7dCCTHsT4ih41FCPPr9JO+05PvWcnL+3M6IOZc7uh5fc9fa0/o8WYhhf0IMHY8T4tFvJ/m8JV+uA9kbJ6/2Piu3Qgkx7E+IoeNJQpwkv57k3Zb80JKXko3g9cbJ6Yyukyt1K5QQw/78W9NwiV6/m5+WyekiubVMhmWS5ZAsl6uvQ7LMxmNIzu4ni/vJ4my1drb6fnhw32L6/GG1b7J3vW+yNi'+
			'wuHuM1LZbJsj24f7F6jl/R4elwIoaOJz0Rb/rl1bzdWr5tyRvJ9gl139F1smPtKd4K5UQM+xNi6LiMECfJz9czb8kX7SiftZb5Vhzz8NH1Id8KJcSwPyGGjssK8ejO9bzZku9acmN2vHqPyeP8ffvR636efAC3Qj0nxLA3IYaOyw7x6M713EhybQzZ7Hj3STjZMWLO4dwK9bz/BhH2JsQAUMhfTQNAISEGgEJCDACFhBgACgkxABQSYgAoJMQAUEiIAaCQEANAISEGgEJCDACFhBgACgkxABQSYgAoJMQAUEiIAaCQEANAISEGgEL/AkFB03LJHGcRAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 10;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me._con_svg_yellow.appendChild(me._image_6);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,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'+
			'AaDQ/wGVW4+4y4Nf2AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 50;';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._con_svg_yellow.appendChild(me._image_5);
		me._responseinformation.appendChild(me._con_svg_yellow);
		el=me._con_text_links=document.createElement('div');
		el.ggId="con_text_links";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 60;';
		hs+='bottom : 0px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 482px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._con_text_links.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._con_text_links.ggUpdatePosition=function (useTransition) {
		}
		el=me._url_link=document.createElement('div');
		el.ggId="url_link";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 14px;';
		hs+='cursor : default;';
		hs+='height : 33px;';
		hs+='position : absolute;';
		hs+='right : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 232px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._url_link.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_link.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_link=document.createElement('div');
		els=me._txt_link__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_link";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 7px;';
		hs+='height : 24px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -22px;';
		hs+='visibility : hidden;';
		hs+='width : 235px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 235px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(85,0,0,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 4px 1px 4px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u865a\u62df\u73b0\u5b9e\uff08VR\uff09\u6280\u672f\u5b9e\u9a8c\u5ba4";
		el.appendChild(els);
		me._txt_link.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_link.ggUpdatePosition=function (useTransition) {
		}
		me._url_link.appendChild(me._txt_link);
		me._con_text_links.appendChild(me._url_link);
		el=me._txt_main=document.createElement('div');
		els=me._txt_main__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_main";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 32px;';
		hs+='height : 52px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 359px;';
		hs+='visibility : hidden;';
		hs+='width : 74px;';
		hs+='pointer-events:auto;';
		hs+='sans-serif; font-size: 25px;line-height: 80%;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 74px;';
		hs+='height: 52px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,85,0,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="360<br\/>tours";
		el.appendChild(els);
		me._txt_main.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_main.ggUpdatePosition=function (useTransition) {
		}
		me._con_text_links.appendChild(me._txt_main);
		el=me._con_txt_title=document.createElement('div');
		el.ggId="con_txt_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 172px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : inherit;';
		hs+='width : 290px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._con_txt_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._con_txt_title.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_title=document.createElement('div');
		els=me._txt_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 60px;';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 18px;';
		hs+='visibility : hidden;';
		hs+='width : 235px;';
		hs+='pointer-events:auto;';
		hs+='sans-serif; font-size: 17px;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 235px;';
		hs+='height: 24px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(207,207,207,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u6df1\u5733\u804c\u4e1a\u6280\u672f\u5b66\u9662";
		el.appendChild(els);
		me._txt_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_title.onclick=function (e) {
			player.openUrl("https:\/\/www.szpt.edu.cn\/","");
		}
		me._txt_title.ggUpdatePosition=function (useTransition) {
		}
		me._con_txt_title.appendChild(me._txt_title);
		me._con_text_links.appendChild(me._con_txt_title);
		me._responseinformation.appendChild(me._con_text_links);
		me.__10.appendChild(me._responseinformation);
		el=me._info=document.createElement('div');
		els=me._info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMCAzMDA7IiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0yMjEuNzU1LDg5LjQxNEg3OC4yNDJjLTEuNDMyLDAtMi41OTQsMS4xNjItMi41OTQsMi41OTR2OTUuOTYzYzAsMS40MzIsMS4xNjIsMi41OTQsMi41OTQsMi41OTRoMTQzLjUxMw0KCQkJCWMxLjQzMiwwLDIuNTk0LTEuMTYyLDIuNTk0LTIuNTk0VjkyLjAwN0MyMjQuMzQ5LDkwLjU3NiwyMjMuMTg3LDg5LjQxNCwyMjEuNzU1LDg5LjQxNHoiLz4NCgkJCTxwYXRoIGQ9Ik0xNDkuOTk2LDBDNjcuMTU3LDAsMC4wMDEsNjcuMTYxLDAuMDAxLDE0OS45OTdTNjcuMTU3LDMwMCwxNDkuOTk2LDMwMHMxNTAuMDAz'+
			'LTY3LjE2MywxNTAuMDAzLTE1MC4wMDMNCgkJCQlTMjMyLjgzNSwwLDE0OS45OTYsMHogTTI0Mi41MDQsMTg3Ljk3YzAsMTEuNDU4LTkuMjksMjAuNzQ5LTIwLjc0OSwyMC43NDloLTQ3LjE0NHYxMS41ODhoMjMuODAxDQoJCQkJYzQuMjk4LDAsNy43ODEsMy40ODMsNy43ODEsNy43ODFjMCw0LjI5OC0zLjQ4Myw3Ljc4MS03Ljc4MSw3Ljc4MWgtOTYuODI2Yy00LjI5OCwwLTcuNzgxLTMuNDgzLTcuNzgxLTcuNzgxDQoJCQkJYzAtNC4yOTgsMy40ODMtNy43ODEsNy43ODEtNy43ODFoMjMuODAxdi0xMS41ODhINzguMjQyYy0xMS40NTgsMC0yMC43NDktOS4yOS0yMC43NDktMjAuNzQ5VjkyLjAwNw'+
			'0KCQkJCWMwLTExLjQ1OCw5LjI5LTIwLjc0OSwyMC43NDktMjAuNzQ5aDE0My41MTNjMTEuNDU4LDAsMjAuNzQ5LDkuMjksMjAuNzQ5LDIwLjc0OVYxODcuOTd6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._info__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;info;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMwMCAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwMCAzMDA7IiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik0yMjEuNzU1LDg5LjQxNEg3OC4yNDJjLTEuNDMyLDAtMi41OTQsMS4xNjItMi41OTQsMi41OTR2OTUuOTYzYzAsMS40MzIsMS4xNjIsMi41OTQsMi41OTQsMi41OTRoMTQzLjUxMw0KCQkJCWMxLjQzMiwwLDIuNTk0LTEuMTYyLDIuNTk0LTIuNTk0VjkyLjAwN0MyMjQuMzQ5LDkwLjU3NiwyMjMuMTg3LDg5LjQxNCwyMjEuNzU1LDg5LjQxNHoiLz4NCgkJCTxwYXRoIGQ9Ik0xNDkuOTk2LDBDNjcuMTU3LDAsMC4wMDEsNjcuMTYxLDAuMDAxLDE0OS45OTdTNjcuMTU3LDMwMCwxNDkuOTk2LDMwMHMxNTAuMDAz'+
			'LTY3LjE2MywxNTAuMDAzLTE1MC4wMDMNCgkJCQlTMjMyLjgzNSwwLDE0OS45OTYsMHogTTI0Mi41MDQsMTg3Ljk3YzAsMTEuNDU4LTkuMjksMjAuNzQ5LTIwLjc0OSwyMC43NDloLTQ3LjE0NHYxMS41ODhoMjMuODAxDQoJCQkJYzQuMjk4LDAsNy43ODEsMy40ODMsNy43ODEsNy43ODFjMCw0LjI5OC0zLjQ4Myw3Ljc4MS03Ljc4MSw3Ljc4MWgtOTYuODI2Yy00LjI5OCwwLTcuNzgxLTMuNDgzLTcuNzgxLTcuNzgxDQoJCQkJYzAtNC4yOTgsMy40ODMtNy43ODEsNy43ODEtNy43ODFoMjMuODAxdi0xMS41ODhINzguMjQyYy0xMS40NTgsMC0yMC43NDktOS4yOS0yMC43NDktMjAuNzQ5VjkyLjAwNw'+
			'0KCQkJCWMwLTExLjQ1OCw5LjI5LTIwLjc0OSwyMC43NDktMjAuNzQ5aDE0My41MTNjMTEuNDU4LDAsMjAuNzQ5LDkuMjksMjAuNzQ5LDIwLjc0OVYxODcuOTd6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._info__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;info;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 670px;';
		hs+='position : absolute;';
		hs+='top : 499px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.onclick=function (e) {
			me._userdata.ggVisible = !me._userdata.ggVisible;
			var flag=me._userdata.ggVisible;
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility=((flag)&&(Number(me._userdata.style.opacity)>0||!me._userdata.style.opacity))?'inherit':'hidden';
		}
		me._info.onmouseover=function (e) {
			me._tt_info.style[domTransition]='none';
			me._tt_info.style.visibility=(Number(me._tt_info.style.opacity)>0||!me._tt_info.style.opacity)?'inherit':'hidden';
			me._tt_info.ggVisible=true;
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
		}
		me._info.onmouseout=function (e) {
			me._tt_info.style[domTransition]='none';
			me._tt_info.style.visibility='hidden';
			me._tt_info.ggVisible=false;
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_info=document.createElement('div');
		els=me._tt_info__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_info";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show Information";
		el.appendChild(els);
		me._tt_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_info_white=document.createElement('div');
		els=me._tt_info_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_info_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Show Information";
		el.appendChild(els);
		me._tt_info_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_info_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._tt_info.appendChild(me._tt_info_white);
		me._info.appendChild(me._tt_info);
		el=me._userdata=document.createElement('div');
		el.ggId="userdata";
		el.ggDx=0;
		el.ggDy=-320;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdata.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata.onclick=function (e) {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		me._userdata.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._userdatabg0=document.createElement('div');
		el.ggId="userdatabg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdatabg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabg0.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdatabg0);
		el=me._userdatabrd0=document.createElement('div');
		el.ggId="userdatabrd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdatabrd0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabrd0.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdatabrd0);
		el=me._title0=document.createElement('div');
		els=me._title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 266px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 266px;';
		hs+='height: 31px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 25px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u7248\u6743\u6240\u6709";
		el.appendChild(els);
		me._title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title0.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._title0);
		el=me._author0=document.createElement('div');
		els=me._author0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="author";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 34px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : inherit;';
		hs+='width : 227px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 227px;';
		hs+='height: 34px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 21px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._author0.ggUpdateText=function() {
			var hs=me.ggUserdata.author+"\u6df1\u5733\u804c\u4e1a\u6280\u672f\u5b66\u9662";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._author0.ggUpdateText();
		el.appendChild(els);
		me._author0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._author0.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._author0);
		el=me._datetime0=document.createElement('div');
		els=me._datetime0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="datetime";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : inherit;';
		hs+='width : 315px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 315px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._datetime0.ggUpdateText=function() {
			var hs=me.ggUserdata.author+"\u865a\u62df\u73b0\u5b9e\uff08VR\uff09\u6280\u672f\u5b9e\u9a8c\u5ba4";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._datetime0.ggUpdateText();
		el.appendChild(els);
		me._datetime0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._datetime0.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._datetime0);
		el=me._copyright0=document.createElement('div');
		els=me._copyright0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="copyright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 34px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 151px;';
		hs+='visibility : inherit;';
		hs+='width : 324px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 324px;';
		hs+='height: 34px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._copyright0.ggUpdateText=function() {
			var hs="&#169; "+me.ggUserdata.copyright+" <a href=\"https:\/\/www.szpt.edu.cn\" target=\"_blank\">https:\/\/www.szpt.edu.cn\/<\/a>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._copyright0.ggUpdateText();
		el.appendChild(els);
		me._copyright0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._copyright0.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._copyright0);
		el=me._description=document.createElement('div');
		els=me._description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 333px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 333px;';
		hs+='height: 28px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u8054\u7cfb\u90ae\u7bb1\uff1a1075321390@qq.com";
		el.appendChild(els);
		me._description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._description.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._description);
		me._info.appendChild(me._userdata);
		me.__10.appendChild(me._info);
		me.__6.appendChild(me.__10);
		el=me._ui=document.createElement('div');
		el.ggId="UI\u4ea4\u4e92";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ui.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ui.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		el.ggId="\u5e95\u90e8\u5bfc\u822a";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('OpenState') == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(player.getVariableValue('OpenState') == true)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__9.style[domTransition]='';
				if (me.__9.ggCurrentLogicStateVisible == 0) {
					me.__9.style.visibility=(Number(me.__9.style.opacity)>0||!me.__9.style.opacity)?'inherit':'hidden';
					me.__9.ggVisible=true;
				}
				else if (me.__9.ggCurrentLogicStateVisible == 1) {
					me.__9.style.visibility="hidden";
					me.__9.ggVisible=false;
				}
				else {
					me.__9.style.visibility="hidden";
					me.__9.ggVisible=false;
				}
			}
		}
		me.__9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._bg_bottom=document.createElement('div');
		el.ggId="bg_bottom";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(80,71,66,0.882353);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 900px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bg_bottom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg_bottom.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._image_right=document.createElement('div');
		els=me._image_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQyOTMzNzY1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwMzMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI5LjIxNiAwIDAgMjI5LjIxNiAwIDUxMmMwIDI4Mi43NjggMjI5LjIxNiA1MTIgNTEyIDUxMiAyODIuNzUyIDAgNTEyLTIyOS4yMzIgNTEyLTUxMkMxMDI0IDIyOS4yMTYgNzk0Ljc1MiAwIDUxMiAwek01MTIgOTkyQzI0Ni44OTYgOTkyIDMyIDc3Ny4wODggMzIgNTEyIDMyIDI0Ni44OTYgMjQ2Ljg5NiAzMiA1MTIgMzJjMjY1LjA1NiAwIDQ4MCAyMTQuODk2IDQ4MCA0ODBDOTkyIDc3Ny4wODggNzc3LjA1NiA5OTIgNTEyIDk5MnoiIHAtaWQ9IjIwMzQiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJN'+
			'NDMwLjg4IDI1MS42MzJjLTYuMjU2LTYuMjU2LTE2LjM2OC02LjI1Ni0yMi42MjQgMHMtNi4yNTYgMTYuMzg0IDAgMjIuNjI0TDY0NiA1MTJsLTIzNy43NDQgMjM3Ljc2Yy02LjI1NiA2LjI1Ni02LjI1NiAxNi4zNjggMCAyMi42MjRzMTYuMzY4IDYuMjU2IDIyLjYyNCAwbDI0OC45MTItMjQ4LjkxMmMzLjE2OC0zLjE1MiA0LjcwNC03LjMyOCA0LjY1Ni0xMS40NTYgMC4wNDgtNC4xNDQtMS40ODgtOC4zMDQtNC42NTYtMTEuNDcyTDQzMC44OCAyNTEuNjMyeiIgcC1pZD0iMjAzNSIgZmlsbD0iI2YzZDViOSI+PC9wYXRoPjwvc3ZnPg==';
		me._image_right__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;image_right;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image right";
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 5%;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_right.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._image_right.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_14=document.createElement('div');
		els=me._text_14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #f8dbbd;';
		hs+='color: rgba(248,219,189,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u4e0b\u4e00\u6b65<br\/>";
		el.appendChild(els);
		me._text_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._image_right.appendChild(me._text_14);
		me._bg_bottom.appendChild(me._image_right);
		el=me._image_left=document.createElement('div');
		els=me._image_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5ODI0NjMxODAyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE4MzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI5LjIxNiAwIDAgMjI5LjIxNiAwIDUxMmMwIDI4Mi43NjggMjI5LjIxNiA1MTIgNTEyIDUxMiAyODIuNzUyIDAgNTEyLTIyOS4yMzIgNTEyLTUxMkMxMDI0IDIyOS4yMTYgNzk0Ljc1MiAwIDUxMiAwek01MTIgOTkyQzI0Ni44OTYgOTkyIDMyIDc3Ny4wODggMzIgNTEyIDMyIDI0Ni44OTYgMjQ2Ljg5NiAzMiA1MTIgMzJjMjY1LjA1NiAwIDQ4MCAyMTQuODk2IDQ4MCA0ODBDOTkyIDc3Ny4wODggNzc3LjA1NiA5OTIgNTEyIDk5MnoiIHAtaWQ9IjE4MzEiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJN'+
			'NTkzLjEyIDc3Mi4zNjhjNi4yNTYgNi4yNTYgMTYuMzY4IDYuMjU2IDIyLjYyNCAwczYuMjU2LTE2LjM2OCAwLTIyLjYyNEwzNzggNTEyLjAxNmwyMzcuNzQ0LTIzNy43NmM2LjI1Ni02LjI1NiA2LjI1Ni0xNi4zNjggMC0yMi42MjRzLTE2LjM2OC02LjI1Ni0yMi42MjQgMEwzNDQuMjI0IDUwMC41NDRjLTMuMTY4IDMuMTUyLTQuNzA0IDcuMzI4LTQuNjU2IDExLjQ1Ni0wLjA0OCA0LjE0NCAxLjQ4OCA4LjMwNCA0LjY1NiAxMS40NzJMNTkzLjEyIDc3Mi4zNjh6IiBwLWlkPSIxODMyIiBmaWxsPSIjZjNkNWI5Ij48L3BhdGg+PC9zdmc+';
		me._image_left__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;image_left;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image left";
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_left.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._image_left.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_13=document.createElement('div');
		els=me._text_13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #f8dbbd;';
		hs+='color: rgba(248,219,189,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u4e0a\u4e00\u6b65";
		el.appendChild(els);
		me._text_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._image_left.appendChild(me._text_13);
		me._bg_bottom.appendChild(me._image_left);
		el=me._image_list0=document.createElement('div');
		els=me._image_list0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQyNzU0OTMxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUxNTciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzQ3LjQyODU3MSAyNzQuMjg1NzE0YTE4LjI4NTcxNCAxOC4yODU3MTQgMCAxIDEgMC0zNi41NzE0MjhoNDc1LjQyODU3MmExOC4yODU3MTQgMTguMjg1NzE0IDAgMSAxIDAgMzYuNTcxNDI4aC00NzUuNDI4NTcyeiBtLTE0Ni4yODU3MTQgMGExOC4yODU3MTQgMTguMjg1NzE0IDAgMSAxIDAtMzYuNTcxNDI4aDM2LjU3MTQyOWExOC4yODU3MTQgMTguMjg1NzE0IDAgMCAxIDAgMzYuNTcxNDI4aC0zNi41NzE0Mjl6IG0xNDYuMjg1NzE0IDI1NmExOC4yODU3MTQgMTguMjg1NzE0IDAgMSAxIDAtMzYuNTcxNDI4aDQ3NS40Mjg1'+
			'NzJhMTguMjg1NzE0IDE4LjI4NTcxNCAwIDEgMSAwIDM2LjU3MTQyOGgtNDc1LjQyODU3MnogbS0xNDYuMjg1NzE0IDBhMTguMjg1NzE0IDE4LjI4NTcxNCAwIDEgMSAwLTM2LjU3MTQyOGgzNi41NzE0MjlhMTguMjg1NzE0IDE4LjI4NTcxNCAwIDEgMSAwIDM2LjU3MTQyOGgtMzYuNTcxNDI5eiBtMTQ2LjI4NTcxNCAyNTZhMTguMjg1NzE0IDE4LjI4NTcxNCAwIDEgMSAwLTM2LjU3MTQyOGg0NzUuNDI4NTcyYTE4LjI4NTcxNCAxOC4yODU3MTQgMCAxIDEgMCAzNi41NzE0MjhoLTQ3NS40Mjg1NzJ6IG0tMTQ2LjI4NTcxNCAwYTE4LjI4NTcxNCAxOC4yODU3MTQgMCAxIDEgMC0zNi41NzE0MjhoMz'+
			'YuNTcxNDI5YTE4LjI4NTcxNCAxOC4yODU3MTQgMCAxIDEgMCAzNi41NzE0MjhoLTM2LjU3MTQyOXoiIHAtaWQ9IjUxNTgiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48L3N2Zz4=';
		me._image_list0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;image_list0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image list";
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 25%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_list0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_list0.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._image_list0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_12=document.createElement('div');
		els=me._text_12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 100%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #f8dbbd;';
		hs+='color: rgba(248,219,189,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u4f5c\u54c1\u5217\u8868<br\/>";
		el.appendChild(els);
		me._text_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._image_list0.appendChild(me._text_12);
		me._bg_bottom.appendChild(me._image_list0);
		el=me._image_list=document.createElement('div');
		els=me._image_list__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQyOTA4OTA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0NTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI5LjIxNiAwIDAgMjI5LjIxNiAwIDUxMmMwIDI4Mi43NjggMjI5LjIxNiA1MTIgNTEyIDUxMiAyODIuNzUyIDAgNTEyLTIyOS4yMzIgNTEyLTUxMkMxMDI0IDIyOS4yMTYgNzk0Ljc1MiAwIDUxMiAwek01MTIgOTkyQzI0Ni44OTYgOTkyIDMyIDc3Ny4wODggMzIgNTEyIDMyIDI0Ni44OTYgMjQ2Ljg5NiAzMiA1MTIgMzJjMjY1LjA1NiAwIDQ4MCAyMTQuODk2IDQ4MCA0ODBDOTkyIDc3Ny4wODggNzc3LjA1NiA5OTIgNTEyIDk5MnoiIHAtaWQ9IjE0NTIiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJN'+
			'ODIxLjE1MiA1MTguMTEyYzAuNDMyLTEuMDA4IDAuODMyLTEuOTg0IDEuMDI0LTMuMDU2IDAuMjI0LTEuMDcyIDAuMjQtMi4wOTYgMC4yMjQtMy4xNTIgMC0wLjk2LTAuMDE2LTEuODcyLTAuMTkyLTIuODE2LTAuMjI0LTEuMi0wLjY1Ni0yLjI3Mi0xLjEzNi0zLjM5Mi0wLjI0LTAuNTQ0LTAuMjU2LTEuMTM2LTAuNTYtMS42NjQtMC4xNi0wLjI1Ni0wLjQtMC40LTAuNTYtMC42NC0wLjY1Ni0wLjk5Mi0xLjQ4OC0xLjgyNC0yLjMzNi0yLjY3Mi0wLjcwNC0wLjY3Mi0xLjM0NC0xLjM0NC0yLjEyOC0xLjg3Mi0wLjMyLTAuMjA4LTAuNDgtMC41MjgtMC44MTYtMC43MDRsLTQ1Ny4yNjQtMjY0Yy0wLj'+
			'I4OC0wLjE2LTAuNjA4LTAuMTYtMC44OTYtMC4zMDQtMC45NzYtMC40OC0yLTAuNzM2LTMuMDU2LTEuMDI0LTEuMDQtMC4yNzItMi4wMzItMC41Ni0zLjA4OC0wLjYyNC0wLjMzNi0wLjAxNi0wLjYwOC0wLjE5Mi0wLjk2LTAuMTkyLTAuNjg4IDAtMS4yOTYgMC4zMi0xLjk2OCAwLjQtMS4xMDQgMC4xMjgtMi4xNDQgMC4yODgtMy4xODQgMC42NC0wLjk5MiAwLjMzNi0xLjg0IDAuODE2LTIuNzM2IDEuMzI4LTAuODggMC40OTYtMS43MTIgMC45OTItMi40OTYgMS42OC0wLjg0OCAwLjcyLTEuNDg4IDEuNTY4LTIuMTYgMi40NDgtMC40IDAuNTI4LTAuOTc2IDAuODk2LTEuMzI4IDEuNDg4LTAuMTc2'+
			'IDAuMzA0LTAuMTYgMC42MjQtMC4zMiAwLjkyOC0wLjQ2NCAwLjk0NC0wLjcyIDEuOTY4LTEuMDA4IDMuMDA4LTAuMjg4IDEuMDU2LTAuNTc2IDIuMDY0LTAuNjQgMy4xMzYtMC4wMTYgMC4zMzYtMC4xOTIgMC42MDgtMC4xOTIgMC45NDRsMCA1MjguMDMyYzAgMC4zMzYgMC4xNzYgMC42MDggMC4xOTIgMC45MjggMC4wNjQgMS4wNzIgMC4zNTIgMi4xMTIgMC42NCAzLjE2OCAwLjI4OCAxLjA0IDAuNTI4IDIuMDQ4IDAuOTkyIDIuOTkyIDAuMTYgMC4zMDQgMC4xNDQgMC42MjQgMC4zMiAwLjkyOCAwLjMzNiAwLjU5MiAwLjkxMiAwLjk2IDEuMzI4IDEuNTA0IDAuNjcyIDAuODggMS4zMjggMS43MT'+
			'IgMi4xNiAyLjQ0OCAwLjc4NCAwLjY3MiAxLjYzMiAxLjE4NCAyLjUyOCAxLjY4IDAuODggMC41MTIgMS43MTIgMC45OTIgMi42ODggMS4zMTIgMS4wNzIgMC4zNjggMi4xNDQgMC41MjggMy4yNjQgMC42NTYgMC42NTYgMC4wOTYgMS4yMzIgMC4zODQgMS45MDQgMC4zODQgMC4zMzYgMCAwLjYwOC0wLjE3NiAwLjkyOC0wLjE5MiAxLjA3Mi0wLjA2NCAyLjA5Ni0wLjM1MiAzLjE2OC0wLjY0IDEuMDQtMC4yODggMi4wNDgtMC41MjggMi45OTItMC45OTIgMC4zMDQtMC4xNiAwLjY0LTAuMTQ0IDAuOTI4LTAuMzJsNDU3LjI0OC0yNjRjMC4zMi0wLjE5MiAwLjQ4LTAuNDggMC43ODQtMC42ODggMC44'+
			'NDgtMC41NiAxLjU1Mi0xLjI4IDIuMjg4LTIuMDE2IDAuOC0wLjc4NCAxLjU4NC0xLjU1MiAyLjE3Ni0yLjQ2NCAwLjE5Mi0wLjI3MiAwLjQ2NC0wLjQxNiAwLjY0LTAuNzJDODIwLjg4IDUxOS4zOTIgODIwLjkxMiA1MTguNzIgODIxLjE1MiA1MTguMTEyek0zNjUuNDA4IDI3NS42OTYgNzc0LjY3MiA1MTIgMzY1LjQwOCA3NDguMzA0IDM2NS40MDggMjc1LjY5NnoiIHAtaWQ9IjE0NTMiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48L3N2Zz4=';
		me._image_list__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;image_list;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image list";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_list.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_list.onclick=function (e) {
			player.startAutorotate("0.25");
			player.setVariableValue('GotoMap', true);
		}
		me._image_list.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_11=document.createElement('div');
		els=me._text_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #f8dbbd;';
		hs+='color: rgba(248,219,189,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u81ea\u52a8\u64ad\u653e<br\/>";
		el.appendChild(els);
		me._text_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._image_list.appendChild(me._text_11);
		me._bg_bottom.appendChild(me._image_list);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAADvElEQVRIibWWv4/mUxTGP89zvxqFKVVKySZ0JERBJqbZVdklTIZEViQiUfob6BQKtGKRUK3Ez5XMZDWK0dFoGLQiGI2d9yjuuT/eN+/ofJOZ7/3ee+495zznOc99dfzRW/wPT2yZWwHXFkkAnwNGXCH44/wzdL4LneNmPIY4sCwkLGtP6FNJOxLIqn9qb09jxjhtTM7VeUmqrzFGsi0J25clfW3rIVmfyd6xhBC2cB5u1znJfd4yssDuNlbaegSJ+xlG8p+WL0q6aelBS19I3nEeonZADQ6XzERGJh24Op8RaWu53xaLXKGI4C/QRcQnEA8LfRXEHvh3RRC11kGAhAgRiiz9KHGg+t3+Zdkja2zbAyL7tMiXinwk6T7LN4p0p116pKUM+zLN20KlZl'+
			'rfCWlCWSSKzVLsJJca204JXRJcBx4FjhFXhL5pLLTUI06W12RiPTNTM54NFxWhtrvtCv0N8RjwHuKygqOQXhYQFVKiHx4M6DquGUMMhzmjH268WwPIZZQGAaAC8TbieWLUg/YRedwU79aWnPYuthn2DQRlZJxBvCD4LeCVcVjzrBp1RBuO7PpYyMm26rCAAsdwGkS4703WDYC+ZwKhBfBfQjMHuRTXbFrtI11owqpTGn2HeLrZefIQSZL+3ZxFIprVWlxmszXq9PxGJutqup5h70AagJvKG2QNp7y36/PskTWbe4EPCO6p1G3r3UBrOLcMW9rnPltSzM8PgQvb9m+rqZhZOm1QbCaz7mlqwQtTTC9JvNk2VtHLsUYtl+Lk8xpptie4OZf+b0WwMvEG0q8Q14cHaFCHawB2KV0DbVPyLXd9pbjdEm2+zqXtaSm+6lIs'+
			'6327PKBi7IJLwaXuK3leJc2aZm2AThCh0Wkei9lbtwmuBdxleJXgY4j7kU6iMbcJA8q2iACZNfb0QtYGa/05IBWuQd5e7eI1pLuJuBrSlwr2kH5uRK2xB4vtSAVRoKH4m53cIm1LATgPy1pF8CLSHRZPBBwKHgF+GQ7F4iRNdJAmekzir+60emiy7Sb6VYn/AfZrLvEkcCS0G3BCgrhYmm6UVqkqyE3kJ7J1i+iWk5hXdt4S7AdaETyFdChiV/ATwKKUNsWcR9QfRdF/TzBuBY1qZkSjDL37ziQOCFYo9gkfCnZD/LhIGfOQo6Gf0lrmaCiVqL3VxVkkm9siZyGeBZ0hnhG8Djy+WFqRvxo2KAKRqjhdR+4sz7CcoI7kB7HQGcRzoG8hjgG0Orn5DnBAXpMbz9wH24V963P+7fgvJLBgxd3IVlAAAAAASUVORK5CYI'+
			'I=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggDy=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 25%;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.onclick=function (e) {
			player.setVariableValue('OpenState', true);
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_10=document.createElement('div');
		els=me._text_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 120%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #f8dbbd;';
		hs+='color: rgba(248,219,189,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u6536\u8d77\u5bfc\u822a<br\/><br\/>";
		el.appendChild(els);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._image_3.appendChild(me._text_10);
		me._bg_bottom.appendChild(me._image_3);
		el=me._image_list_=document.createElement('div');
		els=me._image_list___img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQyOTg4MjMzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyMDAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI5LjIxNiAwIDAgMjI5LjIxNiAwIDUxMmMwIDI4Mi43NjggMjI5LjIxNiA1MTIgNTEyIDUxMiAyODIuNzUyIDAgNTEyLTIyOS4yMzIgNTEyLTUxMkMxMDI0IDIyOS4yMTYgNzk0Ljc1MiAwIDUxMiAwek01MTIgOTkyQzI0Ni44OTYgOTkyIDMyIDc3Ny4wODggMzIgNTEyIDMyIDI0Ni44OTYgMjQ2Ljg5NiAzMiA1MTIgMzJjMjY1LjA1NiAwIDQ4MCAyMTQuODk2IDQ4MCA0ODBDOTkyIDc3Ny4wODggNzc3LjA1NiA5OTIgNTEyIDk5MnoiIHAtaWQ9IjMyMDEiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJN'+
			'MzcxLjAwOCAzMjBjLTguODQ4IDAtMTYgNy4xNjgtMTYgMTZsMCAzNTJjMCA4Ljg0OCA3LjE1MiAxNiAxNiAxNnMxNi03LjE1MiAxNi0xNkwzODcuMDA4IDMzNkMzODcuMDA4IDMyNy4xNjggMzc5Ljg0IDMyMCAzNzEuMDA4IDMyMHoiIHAtaWQ9IjMyMDIiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJNNjUyLjk5MiAzMjBjLTguODQ4IDAtMTYgNy4xNjgtMTYgMTZsMCAzNTJjMCA4Ljg0OCA3LjE1MiAxNiAxNiAxNnMxNi03LjE1MiAxNi0xNkw2NjguOTkyIDMzNkM2NjguOTkyIDMyNy4xNjggNjYxLjg0IDMyMCA2NTIuOTkyIDMyMHoiIHAtaWQ9IjMyMDMiIGZpbGw9IiNmM2Q1YjkiPj'+
			'wvcGF0aD48L3N2Zz4=';
		me._image_list___img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;image_list_;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image list ";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_list_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_list_.onclick=function (e) {
			player.setVariableValue('GotoMap', false);
		}
		me._image_list_.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #f8dbbd;';
		hs+='color: rgba(248,219,189,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u505c\u6b62\u64ad\u653e<br\/><br\/>";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._image_list_.appendChild(me._text_1);
		me._bg_bottom.appendChild(me._image_list_);
		me.__9.appendChild(me._bg_bottom);
		el=me._thumbnail_menu_mobile=document.createElement('div');
		els=me._thumbnail_menu_mobile__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_thumbnail_menu_mobile';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 134px;';
		hs+='left : 50%;';
		hs+='margin-left : -99.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 199px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu_mobile.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu_mobile.ggHorScrollVisible || diffX == 0) return;
			me._thumbnail_menu_mobile.ggScrollPosX = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu_mobile.ggScrollPosX = Math.max(me._thumbnail_menu_mobile.ggScrollPosX, 0);
			me._thumbnail_menu_mobile.ggScrollPosX = Math.min(me._thumbnail_menu_mobile.ggScrollPosX, me._thumbnail_menu_mobile__horScrollBg.offsetWidth - me._thumbnail_menu_mobile__horScrollFg.offsetWidth);
			me._thumbnail_menu_mobile__horScrollFg.style.left = me._thumbnail_menu_mobile.ggScrollPosX + 'px';
			me._thumbnail_menu_mobile__content.style.left = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosX / me._thumbnail_menu_mobile.ggHPercentVisible)) + me._thumbnail_menu_mobile.ggContentLeftOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosXPercent = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft / me._thumbnail_menu_mobile__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu_mobile.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu_mobile.ggHorScrollVisible || diffX == 0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu_mobile.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu_mobile.ggScrollPosX >= me._thumbnail_menu_mobile__horScrollBg.offsetWidth - me._thumbnail_menu_mobile__horScrollFg.offsetWidth)) {
					me._thumbnail_menu_mobile.ggScrollPosX = Math.min(me._thumbnail_menu_mobile.ggScrollPosX, me._thumbnail_menu_mobile__horScrollBg.offsetWidth - me._thumbnail_menu_mobile__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu_mobile.ggScrollPosX <= 0)) {
					me._thumbnail_menu_mobile.ggScrollPosX = Math.max(me._thumbnail_menu_mobile.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu_mobile__horScrollFg.style.left = me._thumbnail_menu_mobile.ggScrollPosX + 'px';
			me._thumbnail_menu_mobile__content.style.left = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosX / me._thumbnail_menu_mobile.ggHPercentVisible)) + me._thumbnail_menu_mobile.ggContentLeftOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosXPercent = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft / me._thumbnail_menu_mobile__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu_mobile.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu_mobile.ggVertScrollVisible || diffY == 0) return;
			me._thumbnail_menu_mobile.ggScrollPosY = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu_mobile.ggScrollPosY = Math.max(me._thumbnail_menu_mobile.ggScrollPosY, 0);
			me._thumbnail_menu_mobile.ggScrollPosY = Math.min(me._thumbnail_menu_mobile.ggScrollPosY, me._thumbnail_menu_mobile__vertScrollBg.offsetHeight - me._thumbnail_menu_mobile__vertScrollFg.offsetHeight);
			me._thumbnail_menu_mobile__vertScrollFg.style.top = me._thumbnail_menu_mobile.ggScrollPosY + 'px';
			me._thumbnail_menu_mobile__content.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + me._thumbnail_menu_mobile.ggContentTopOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosYPercent = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop / me._thumbnail_menu_mobile__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu_mobile.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu_mobile.ggVertScrollVisible || diffY == 0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu_mobile.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu_mobile.ggScrollPosY >= me._thumbnail_menu_mobile__vertScrollBg.offsetHeight - me._thumbnail_menu_mobile__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu_mobile.ggScrollPosY = Math.min(me._thumbnail_menu_mobile.ggScrollPosY, me._thumbnail_menu_mobile__vertScrollBg.offsetHeight - me._thumbnail_menu_mobile__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu_mobile.ggScrollPosY <= 0)) {
					me._thumbnail_menu_mobile.ggScrollPosY = Math.max(me._thumbnail_menu_mobile.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu_mobile__vertScrollFg.style.top = me._thumbnail_menu_mobile.ggScrollPosY + 'px';
			me._thumbnail_menu_mobile__content.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + me._thumbnail_menu_mobile.ggContentTopOffset + 'px';
			me._thumbnail_menu_mobile.ggScrollPosYPercent = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop / me._thumbnail_menu_mobile__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu_mobile.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu_mobile.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu_mobile.ggHPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu_mobile.offsetWidth - (me._thumbnail_menu_mobile.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu_mobile.offsetWidth - (me._thumbnail_menu_mobile.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu_mobile.ggHPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu_mobile.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu_mobile.ggVPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu_mobile.offsetHeight - (me._thumbnail_menu_mobile.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu_mobile.offsetHeight - (me._thumbnail_menu_mobile.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu_mobile.ggVPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu_mobile.ggDragLastX = t[0].clientX;
			me._thumbnail_menu_mobile.ggDragLastY = t[0].clientY;
			me._thumbnail_menu_mobile__content.ontouchend = function() {
				me._thumbnail_menu_mobile__content.ontouchend = null;
				me._thumbnail_menu_mobile__content.ontouchmove = null;
			}
			me._thumbnail_menu_mobile__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu_mobile.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu_mobile.ggDragLastY;
				me._thumbnail_menu_mobile.ggDragLastX = t[0].clientX;
				me._thumbnail_menu_mobile.ggDragLastY = t[0].clientY;
				me._thumbnail_menu_mobile.ggScrollByX(-diffX);
				me._thumbnail_menu_mobile.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu_mobile__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 900px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu_mobile__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 900px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu_mobile.ggScrollPosX = 0;
		me._thumbnail_menu_mobile.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu_mobile.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu_mobile.ggDragLastX;
				me._thumbnail_menu_mobile.ggDragLastX = e.clientX;
				me._thumbnail_menu_mobile.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu_mobile.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu_mobile.ggDragLastX;
				me._thumbnail_menu_mobile.ggDragLastX = t[0].clientX;
				me._thumbnail_menu_mobile.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu_mobile.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu_mobile.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu_mobile.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu_mobile__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu_mobile.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu_mobile.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu_mobile.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu_mobile.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu_mobile__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu_mobile";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 90px;';
		hs+='height : 120px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 900px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu_mobile.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu_mobile.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumbnail_menu_mobile.style.bottom='80px';
					me._thumbnail_menu_mobile.ggUpdatePosition(true);
				}
				else {
					me._thumbnail_menu_mobile.ggDx=0;
					me._thumbnail_menu_mobile.style.bottom='90px';
					me._thumbnail_menu_mobile.ggUpdatePosition(true);
				}
			}
		}
		me._thumbnail_menu_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('vis_thumbnail_menu') == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(player.getVariableValue('vis_thumbnail_menu') == true)
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu_mobile.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu_mobile.style.visibility=me._thumbnail_menu_mobile.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_mobile.style.opacity=1;
				}
				else if (me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha == 1) {
					me._thumbnail_menu_mobile.style.visibility="hidden";
					me._thumbnail_menu_mobile.style.opacity=0;
				}
				else {
					me._thumbnail_menu_mobile.style.visibility=me._thumbnail_menu_mobile.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_mobile.style.opacity=1;
				}
			}
		}
		me._thumbnail_menu_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e.getBoundingClientRect) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes()) {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var containerWidth = offsetWidthWithScale;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = (contentWidth/-2) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.offsetHeight;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = (contentHeight/-2) + 'px';
				}
				else {
					this.ggContent.style.top = this.ggContentTopOffset + 'px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > offsetWidthWithScale) {
					me._thumbnail_menu_mobile__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu_mobile__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu_mobile.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu_mobile__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu_mobile__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu_mobile.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu_mobile.ggHorScrollVisible) {
					if (me._thumbnail_menu_mobile.ggVertScrollVisible) {
						me._thumbnail_menu_mobile.ggAvailableWidth = me._thumbnail_menu_mobile.offsetWidth - 15;
						me._thumbnail_menu_mobile.ggAvailableWidthWithScale = me._thumbnail_menu_mobile.getBoundingClientRect().width - me._thumbnail_menu_mobile__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu_mobile.ggAvailableWidth = me._thumbnail_menu_mobile.offsetWidth;
						me._thumbnail_menu_mobile.ggAvailableWidthWithScale = me._thumbnail_menu_mobile.getBoundingClientRect().width;
					}
					me._thumbnail_menu_mobile__horScrollBg.style.width = me._thumbnail_menu_mobile.ggAvailableWidth + 'px';
					me._thumbnail_menu_mobile.ggHPercentVisible = me._thumbnail_menu_mobile.ggAvailableWidthWithScale / contentWidth;
					if (me._thumbnail_menu_mobile.ggHPercentVisible > 1.0) me._thumbnail_menu_mobile.ggHPercentVisible = 1.0;
					me._thumbnail_menu_mobile.ggScrollWidth = Math.round(me._thumbnail_menu_mobile__horScrollBg.offsetWidth * me._thumbnail_menu_mobile.ggHPercentVisible);
					me._thumbnail_menu_mobile__horScrollFg.style.width = me._thumbnail_menu_mobile.ggScrollWidth + 'px';
					me._thumbnail_menu_mobile.ggScrollPosX = me._thumbnail_menu_mobile.ggScrollPosXPercent * me._thumbnail_menu_mobile.ggAvailableWidth;
					me._thumbnail_menu_mobile.ggScrollPosX = Math.min(me._thumbnail_menu_mobile.ggScrollPosX, me._thumbnail_menu_mobile__horScrollBg.offsetWidth - me._thumbnail_menu_mobile__horScrollFg.offsetWidth);
					me._thumbnail_menu_mobile__horScrollFg.style.left = me._thumbnail_menu_mobile.ggScrollPosX + 'px';
					me._thumbnail_menu_mobile__content.style.left = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosX / me._thumbnail_menu_mobile.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				} else {
					me._thumbnail_menu_mobile.ggScrollPosX = 0;
					me._thumbnail_menu_mobile.ggScrollPosXPercent = 0.0;
				}
			}
		}
		el=me._thumbnail_cloner_mobile=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 172;
		el.ggHeight = 120;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner_mobile.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible) {
						me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible();
					}
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible) {
						me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible();
					}
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile && me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner_mobile.ggUpdating == true) return;
			me._thumbnail_cloner_mobile.ggUpdating = true;
			var el=me._thumbnail_cloner_mobile;
			el.ggInstances = [];
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			el.ggCurrentFilter = filter;
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = el.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner_mobile.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner_mobile.ggWidth) + 'px';
				var inst = new SkinCloner_thumbnail_cloner_mobile_Class(nodeId, me, el, parameter);
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= numRows) {
					row = 0;
					column++;
				}
				}
			}
			me._thumbnail_cloner_mobile.callChildLogicBlocks_changenode();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_active();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip();
			me._thumbnail_cloner_mobile.ggUpdating = false;
			player.triggerEvent('clonerchanged');
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 172px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner_mobile.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner_mobile.childNodes.length; i++) {
				var child=me._thumbnail_cloner_mobile.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.ggUpdatePosition=function (useTransition) {
			var w=player.getViewerSize().width;
			var h=player.getViewerSize().height
			if ((!me._thumbnail_cloner_mobile.ggLastSize) || (me._thumbnail_cloner_mobile.ggLastSize.w!=w) || (me._thumbnail_cloner_mobile.ggLastSize.h!=h)) {
				me._thumbnail_cloner_mobile.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner_mobile.ggUpdate();
			}
		}
		me._thumbnail_cloner_mobile.ggNodeChange=function () {
			me._thumbnail_cloner_mobile.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu_mobile__content.appendChild(me._thumbnail_cloner_mobile);
		me.__9.appendChild(me._thumbnail_menu_mobile);
		me._ui.appendChild(me.__9);
		el=me.__8=document.createElement('div');
		el.ggId="\u53f3\u8fb9\u5bfc\u822a";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me._music=document.createElement('div');
		els=me._music__img=document.createElement('img');
		els.className='ggskin ggskin_music';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="music";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 80%;';
		hs+='top : 40%;';
		hs+='visibility : inherit;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._music.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._music.onclick=function (e) {
			player.setVolume("_main",0);
			me._musicclose.style[domTransition]='none';
			me._musicclose.style.visibility=(Number(me._musicclose.style.opacity)>0||!me._musicclose.style.opacity)?'inherit':'hidden';
			me._musicclose.ggVisible=true;
			me._music.style[domTransition]='none';
			me._music.style.visibility='hidden';
			me._music.ggVisible=false;
		}
		me._music.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_21=document.createElement('div');
		els=me._text_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 31px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 1px;';
		hs+=cssPrefix + 'border-radius: 1px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u97f3\u4e50<br\/>";
		el.appendChild(els);
		me._text_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_21.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._music.appendChild(me._text_21);
		me.__8.appendChild(me._music);
		el=me._help=document.createElement('div');
		els=me._help__img=document.createElement('img');
		els.className='ggskin ggskin_help';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="help";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 40%;';
		hs+='top : 40%;';
		hs+='visibility : inherit;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._help.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._help.onclick=function (e) {
			me._helpinformation.ggVisible = !me._helpinformation.ggVisible;
			var flag=me._helpinformation.ggVisible;
			me._helpinformation.style[domTransition]='none';
			me._helpinformation.style.visibility=((flag)&&(Number(me._helpinformation.style.opacity)>0||!me._helpinformation.style.opacity))?'inherit':'hidden';
		}
		me._help.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110.05%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 31px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 1px;';
		hs+=cssPrefix + 'border-radius: 1px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5e2e\u52a9<br\/>";
		el.appendChild(els);
		me._text_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._help.appendChild(me._text_20);
		me.__8.appendChild(me._help);
		el=me._musicclose=document.createElement('div');
		els=me._musicclose__img=document.createElement('img');
		els.className='ggskin ggskin_musicclose';
		hs='data:image/png;base64,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'+
			'rkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="musicclose";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 80%;';
		hs+='top : 40%;';
		hs+='visibility : hidden;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._musicclose.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._musicclose.onclick=function (e) {
			player.setVolume("_main",1);
			me._musicclose.style[domTransition]='none';
			me._musicclose.style.visibility='hidden';
			me._musicclose.ggVisible=false;
			me._music.style[domTransition]='none';
			me._music.style.visibility=(Number(me._music.style.opacity)>0||!me._music.style.opacity)?'inherit':'hidden';
			me._music.ggVisible=true;
		}
		me._musicclose.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 110%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 31px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 1px;';
		hs+=cssPrefix + 'border-radius: 1px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 15px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u97f3\u4e50<br\/>";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._musicclose.appendChild(me._text_2);
		me.__8.appendChild(me._musicclose);
		me._ui.appendChild(me.__8);
		el=me.__7=document.createElement('div');
		el.ggId="\u5e95\u90e8\u4ea4\u4e92";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQzMTExMDgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIwODAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMjA3LjMgNTExLjVtLTk0IDBhOTQgOTQgMCAxIDAgMTg4IDAgOTQgOTQgMCAxIDAtMTg4IDBaIiBwLWlkPSIyMDgxIiBmaWxsPSIjZjNkNWI5Ij48L3BhdGg+PHBhdGggZD0iTTUxMiA1MTEuNW0tOTQgMGE5NCA5NCAwIDEgMCAxODggMCA5NCA5NCAwIDEgMC0xODggMFoiIHAtaWQ9IjIwODIiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJNODE2LjcgNTExLjVtLTk0IDBhOTQgOTQgMCAxIDAgMTg4IDAgOTQgOTQgMCAxIDAtMTg4IDBaIiBwLWlkPSIyMDgzIiBmaWxsPSIjZjNkNWI5Ij48L3BhdGg+PC9zdmc+';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;svg_2;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5%;';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('OpenState') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(player.getVariableValue('OpenState') == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_2.style[domTransition]='';
				if (me._svg_2.ggCurrentLogicStateVisible == 0) {
					me._svg_2.style.visibility=(Number(me._svg_2.style.opacity)>0||!me._svg_2.style.opacity)?'inherit':'hidden';
					me._svg_2.ggVisible=true;
				}
				else if (me._svg_2.ggCurrentLogicStateVisible == 1) {
					me._svg_2.style.visibility="hidden";
					me._svg_2.ggVisible=false;
				}
				else {
					me._svg_2.style.visibility=(Number(me._svg_2.style.opacity)>0||!me._svg_2.style.opacity)?'inherit':'hidden';
					me._svg_2.ggVisible=true;
				}
			}
		}
		me._svg_2.onclick=function (e) {
			player.setVariableValue('OpenState', false);
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 70%;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 30px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(108,95,83,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5c55\u5f00\u5bfc\u822a<br\/>";
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me._svg_2.appendChild(me._text_3);
		me.__7.appendChild(me._svg_2);
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABfCAYAAAByWTA/AAAgAElEQVR4nO2deZBeV3nm37t8W3eru6VuyWq53bIWI0uWbYgcbGE7CIhdJDATakwxECwTwoQlM1TFSU2YTDIucOFKCIQARQbiTBwIMGELkABhJovBseOxg52JhY0YY2G5jbVY+9Lfcrczf3zf79znO4iqmf/zVanUy71nec/zPu/zvufc29H//NP/8lv2L5//109kZs7Mumb2nJk9YWYHb9575/kfufCGK7e+O0lTazablue5JUli2WBgFkVmZhbHsSVJYlVVWaPRsDzPzTlnjUbDoiiyoij879I0tX6/7+/Ls8ySNDXnnFVVZXEc+/YGg4ElSWJpmlqWZZYkiSVJ4geWZZk55yyOYzMz/7uyLC1JEsvz3NI0tSiKrKqqYR9laeloXGbm5xPHsb+edv'+
			'I89+M2M6uqytI0tTzPrdFoWFmWVlXVcI55btgoyzLrtJu2tLjOtr9g0TZess4mJ1qfv3nvnd9VwyabF9fviePYqspZnudWFKXFSWJlWVpZlr5T58yKohwZyZlZZFmWWVVV/pqyrEbXmEVRZGnaMOeGxuD7oiiGKxrV9ydJ6vvDKFEUW1kODTY0ZGF5XliaphbH9fdJklhRDI0dRbENBtloLKVFUewNX1WV5XkxWpzhmAHF8Oth30mSWL8/GF0TWZqmVjlnzpnleWFlWdogy+3k6fO2/8ln7ejzp2317NQVx59+ONty9cue9YZdumhuT4go0Oic8+hjwqkgEAMVRWFxHJtzzqPIzPlJgRq+TtPU3w8inXNWFMOBx3FcI2a0aBZF1mq1zDnnFwCUJUliWZb5rxm7orzZbFq73TbnnO+r1WqNDJ778TEmxsX/9MlcGPPp'+
			'syt2cPmoza1eteXUs4/0Duz75qEtV7/Mks0XX7QnyzI/GBrF5TAo7o8BuTYZoTuKIouiyBskjmMritIGg4F3ZQYOWqIo8m4ax7G1Wi3fF4uXJIk1m02LosjyPPd96WLrOGk7TVO/gGoIKC+KIms0GtZoNMYA1Gw2zcw8VbFAzJc5shBlWVq/n9mJk+dt09K6yzqd1p4D+755X7Jlcf0eUOCc8whM09QjcWi02JyrPO8o9+qKgmgoA4RyvXPOTwxeZeJQCsbgf9pUNDMG7gEYgKTZbFpRFFYUhb+Xj6K20WiM9eNdebRYeIZ6CAvBHJrNpp05e97KqrK1c9PWaTf3JUsXze2hsyRJPA1oYxgQwzMo0M1qguga8TUCGCR9QRmgEIOmaWqtVstfi4GzLPMI09+NBS9xZe0LSlCUKT2p92VZ5u/TOevvnXPWbrf9nLi/P8'+
			'gtiSNbWlx7LllYM70nHUU8Bk0jIBFDwEf8DmSDBgylLsMCYDwmRbt8rcgEQbSBJxRF4aM5qBpSzrjrsxChIsAIXKfxofbMGpnMifnhcSC1KArLssx74GCQW1GW9sKdm+MUaaFugRtgwKqqfDTHrdVtmDiTgo+dmbmRYVhVXJQJYigCE+3hrqCH8bGQdeSPPABAOxPFGMhAvIr+QWer1fI2ADB4aVEU1ul0fH8sAPeameftZrNp584PzMxWx3CETgS4E6WRJc1m0wcYJkcQUt7L89xyWQgWSQ0FMkGnBibaz/N8jEZYaHVTM/OA4Ho8UD94g/bTaDQ88kI1AZIJnGoP9SgNZs45K4ZSrpHSiUoZJq7uqjxHx0wMAyuSk5F7FUVh2WBgcRSZs5rwoQfuge8wmPI5HqCGhhp0TKBNXRnB32w2bTAYeH5k3H6xArmJxm63'+
			'22NyMvQiQMDiuiFNuZiVZDVC3mLiGthUQTSbTc/JikoQ5PVuklir1RqTWfAcfSovg0o1riJH0alyCsMPBgOPTNqDFjQ48w9DYiA8B5fHBhhYabDZbHoPgY9jjKKdDDOwoQHa7baXMOqyNMogNF0E4Rr4uLff748FMdrQABEmExpk1JAagHBt1Zt8oBX1PKWhsizNxMMAGdTBYoayDGq8ELBiBsgHVyDIQPrk54oivU87VwHvpdro581m01/DwDDuhe43GwYXdc9msznm+swhyzL/PTUAxpDnuTcSRhmK+/5wMUZ9QS8hRRJ3VBVgryiKrN/vW5IknmbSSriC6KaSBGIHqSr0nXPe5VTDYnCVTpragkzu5z7VxOr2oAuEq2uH2hKDanzAYBrtB4PBWGpNTNFgpePDBgoO6hsgXTPAtBitJL/kZnU9XAmksOrq+p68Jd'+
			'1V11T+CbMrUKkuy+9Czcm1jIE2O52OxXHsjcyc6E95nLaQaARGgKQBHEOrvEIZtNtt30+d6Y24H7dRSaNZCwMnCnM9XEnwYsVwIToHyRgJrtX8m/tBqE4Id9a0lnZx/Xa77amAoMZia0CDT+kXj2LsuDxUyIJwT7vdtjiOrdvtjslITYTozxuWFWICdNTv963Valmz2bSVlRUbDAZjPKgDLcth0YWBscooBPpRt+L3oAbppBPKsmyMLnBBjKc14jRNfQGF5EcjO0ZWnlVaCMeumSTzVi3PQkIJMdxrZn7lMRbuROcYWFNdTXGVH7VwjHEwIgYhkOiKMwbVuCBUZc6FNHb4M/L4wWBg/X5/zIsYoyoAFkQ5m49SCIGNxdHgrIUkM7OUwMPF2rFKobA+gDGhAoztnLNerzemBTU74TraVo+BfoiwOrnhJMaL33Ec22Aw'+
			'8AFFRTuoUppi/MxZiy+a9REf+v2+pxpQHFKGann1hhguU0FfVZX1+32PKo2AFDv4GnfRNJN8XOu06koa3JSX4F++1vR2iPRirADCpJBN6G/a45rJyUnP8+pRGqTg8cFg4JGsVKWFGgVNnuee2+M4tjgagUfTP4zKoBRduiIQNQYN6UORqQpAy4+qFFgkdTst2Q13I2rV0ul0PH+yEHCzauKwEocxWFCdp4IGTg+DpmRVPkXGNoApy0aIBUGsFMbTzlV/0gF5N+5LByCw0+mMaU51d+7B+FrbxHXDtBcA4GHK9YxVFxploRpaXVW3d7Q+oMhUj2QrJ6xNx3Hst3jQ9GZmKZOnYe1M00KNvGocRR8GgbOSUX0AI0ItoID+NLlQNTA0TGJVVVoUma2bWz3x1te/5vWtZmPitz/2yT+M4zgHFBiZGAAYNOvSQKPGQfeiTf'+
			'kdAVVLqywQe2yhREvTpDYsnHmh6jy/w/3VfVRw44a4FAFIXZGV1eKyTpLBgu66yN2wSxfXz775ta++ddVEZy4vykGr1Uzzbj/XipNyolIbXqbA0IVVcPR6vbEqFnNQz2GOWi70WekI5Skpmw6KqE9BRuVEGAD4YHx1WxXhrLIuAu2Sm+uuRV0zTe2Kyzavu/U1r7y13W6uyrOi99mv/c1nzp7v9sKUGUNoqqmSTNvVxGQwGPgdFM3YzGrFoqVNBZhmXVVVWbuVjlMBxQMMra6uQUklCoaCR/ndj+NIlV+0hzG0ckRUTtPUrrlqx+Ib/tVNP5+mjU6v3z/7J1/46qf3P3XwGAuk2ZuCBDoAYaHW5HeKSEUzC8x9mghQdYNmsizz6oQwktIoK66EjYuy3QESdWtFV5OBsOUCP+nAaJu+MEItxeotkJtvvHbrq19x4+vS'+
			'JG6cW+ke//hnvvTp5UNHz4CWMNXUVFqVhco+pBpzRk0wXowHALQ2zIJgA6iTPbU0TS2BY3UfR3mJCWux+kIprN6vCNe0FGRoYOn1emPoIIAURW5RFNstP/PyK2+68drXJHEcnzh99tCH7/mzTx85dqKnCxIeB9KDJoxZiy7q3loDITArTcH3vloFdwbSVCtdVVVZqzkyLJ1p1mVWV85BGz/XorjWZ3UxtHhDu7THgCcmJsaSCiYVx7Hddsurrr1+19WvtMjs6PETP3j/xz/1uZVePyMo4hXIH9Jt2iIAoq0ZHwtNDRhuV9rQoj7jV4oC/cyJ3QOyPmoFKcbEMMpbRVH4FcGwunmoGY7WETTDUu0KcrTKxX0M7Jf3vvblL9q57UYzs2d+ePiJD9z9mS8PsqzUKKx1YdDGQtZJRR35VfapHuca7oeidF7huQidN9ew5e'+
			'ScY89riNgLcQmGUQpgMEoHDKTf7/uaqFa/4DMNDGHFauhCzej2f/eGV23feuku58y+d+CZb//+H33mG/3BwJENabAJz1sxTihHpZt6FcbgeovGC+qgmrGyiP1+389BM0vl9GGsGCU+RDNkBdyhg+Frzfk1kqvrjKeiNZ+BSjhNFcLkRCf5tbe98ZaNF6/fHpnZI/v23/fRT3zhW0xQKUi/1uM+GIe+VHuiGEJN7pyzhmhx9b5QsxJgNWhjB+X6scxL0zgGqVEcQ5EPa+4PNajBGEQYjRmkKoi51TPN3/j3v/D6i9bNbXKVufse/qf/8YnPf/Uff1xJEE9RdcJY9GegsyxLv2VDoUnbMBtXKaqSVK4xP/VmBRk/bzaHqE5ZYW0giupDEKy6TozGWADN2EL5QWDRhIDP0uLC5H/65dveuHp2ZqGqqvJrf3f/V/78r+59'+
			'XF1ranIibbeaaVkUVgoCh9eYJUlqvf6gXOn2cn7ebjXTmelVaVVVduLU6UEURQ40RlHkaxNm9eEUZCU/w4tZLEW/FmlQBmEJIFVj1NIkt6qqFYLuCZFpgFY9wAaiQSSROyzRgZTfeOeb3zg3O72QF2X+qS9+/XP3PvjoAYJbo9Gwnds2r739l97w1jhJ0nrIw7PqZs4iG0lE59zn/uKvP/u1v33gyZ+48vK1v/6O296apElqZnb81JnDv3LH792t20osLjUGxh2e+ibAqufwdZjpMW+fD3iZIFE2SWKrqnKMDpRDCXZhdZ/rlHu1MgZqQHw8QkASO5eMkAEKer3eMHAksSVxXJ/+x8J1YLZIeDaOY4vT+uBwEtdnIXBfTWy4j0wSBKrSwNgYn3ZCGadxINp9xZZ3D7mhOZYhKeq0sqUSiuxDBwcSaE/5Ufeg4ji2jY'+
			'sLk7/5K2954/ya1QuuKssvfv3eL//51+99gmpUs9m02ZnpdGqykw6r+aXsxlILTazX75dnz614KpjotNOZ6VVpHEd26MjzgyzLHTuqzKmqqrEzDRqs2DGmaqW1ATW2KicWtdNu2O3v+LmV5JJ1a/bodjOT12hPNOR/VkZrB+oGGgRDfemFdxzbSreXP/DwP3/n2p+4YnFmetWaKy7fvH1meqr76GP7D/k9taKo+oO8OHd+pegPsuLc+ZXi3PmV4vxKtzh3vsvPq7GsKc+r/iArzq90i6qqAy8eFwZATzGjMYZyUp+1CDNMNXBZlpYmib3kxdvz5NKFtXsYlLqwujy/N6s3FzUJUPmhAlwpRgcURZGlo366vV557wPffvyaF+1YO7d6Zu1lmzdetnTxRdGD3953UFNpjdhMmjF0Oh1vNNCkkV2/143DUK/qwoc6nQK7'+
			'SkClQL5vNlLb/ZOX58nSRXN7aFTlEpSgPAuvhByj5biwowuhwswsliBQFKW773/903ev2LZ56qJ1cxsuXdxw6c7Lt0w++Mi+p6KoPoWo0ka9jIDC/4xVwQEoiOpaTVNFg/dp+6HGVR2tGaqZWZrEQ8Nu2rBuj6JAD+ZqGsc1oxGYq+qzVqrpcDs1fFgQ0YCmgeGb//DIk5uWNiRLi+s3rl83d/Guq7fPP/CPj/2fLMudprPEBD3NokGRBaaP8FSMVsI0eGvioKVIPUkYZl0KluH9kV1/7Y4hYlkRpJFWii708EOSJMNIbXWFXatZ6iYhN2sWp9fx/X0PPvr0/Nxs/7LNS1vn52bXXXfNlYt//+Cj3xtkeckklPt1G1sDpWZ7uD/GRGNj8AtFeTwYhGpfzEfTdcDX6bRrxDJpRQQT5cbwcC8LoZyqWyqaJKjhdKcgTD'+
			'5o66FHvvNcp90+uWPbpm2rZ6bXvPT6XVseeuQ7+8+eO19wnxac1QtAHsbXKhsGY/xa1oSHw2xPtTltq8xUCkmSxDqdtl2767LcPzXDKgBrdR9Fn6JCyZ3vFYnqVronFtKBFtEZ6L7vPvV8rzc49MKrtm2fWTU1+7Ibrtm277vff/LEqTMD2tbERXlSDYmE1G1yFlp5FOMhtTRga9THM5mbVtiG90Q1YnVPSPmJ1VWjK4HrdrnyND/ToKbI1QGHxXLl7Cd/sHzy8JFjT79415Xbp6YmZvZcf82Og8uHDhw9fqqrXqD6Uhc1TKWZW1gHUc/UREfvVcUT1haU39M0GRp24/r5PeHEWVlu0me/wopSKFu4P8zaNBPDGCxWo9EY2ybX+55ePnT26eXnvn/dNTsvn5qamL7huhftPHTk+MEfPPPDcxhEx8LiY0Qith541p0M'+
			'LTBpqkqs0QUJvUElKhlbs9Ww63a9II+VtIE3WpUCS9iJcpeurmZhfK1HmHQnl3KltsNYuJ5DJA8/+vjz73rPR+45e3blRKfd6rzrnW/ae8nF6zuqo5WC+J6+CETMQc9GaDaJJ7LwnCMIq15qAy0zBlKzzpiYpFaX9PfKmXqwLVzVsE6ggVC1MG0MBgOf5mr1jHucc/bkgeXTv3rHB+85cuzEs91+//z5lW5BgFR5pCKfoMupwzBL1BKjJhdhLUFLo7rxCM3xf1EUVhajlFfPH2nOrK7FSrJqrL6ikU9Ygw3TYTWaCuwoin7k/Bc0Q+R++pnnuq/7xV+/h77pT/tXI4Eqxs4Wipb99Mgme1jOOU9NYQ1WKURlHo8ZZPnoLK4Kf0396IhihZn52qpeqydkVKjrWSi4WuWO9nkhKsAwmqygQbkXw6teVtTrsXvlXNrWtJ'+
			'wD0/TTarX8+TQWsarqR0npX2WamVkyKuSl+lRi6KYqslV4h8QPunGXeh8oHrtWJ65aUE+UcGIcQ+vuMGgjkeGjHsHiKtL0/lC54K1pmvoAp+onLC2yKBokiR96faooUfkDmmiMMh6Iy7LMn54JdyEwfrPZMOdq5IQKAlRpgAmRG+pjbV8DiRpAC0XQjX5Cr9O29dCGgoBkIeRUMxs7UOi9jSMykLFGaX1YjhVSsU0Fnv19PYBrNn72VAOknuuH43E1PRChRgB1YR2CiWFcjf4sJl6EN5AIaAzQQxyhBtcUV7U4CNeMLWLRyrL0Wy1a5NaEAMNiIC2KQ/CaXmqWxkAZEO6OoTAiKOR7OFADKmNT7uU6qIqxqhcwPvVKaEPrzyBddxPwVD1orDSghZqiKKyqayXjjzAyAJ1QKOY1iWBiethBg5qKb83vNbWEm0FwKIFU'+
			'Q+IJLHioYDC2PkfBPz2ar6VD3Jo2w0N9eg5N026NTcrB3rAYAkhr8NCUT7UtrqKHyRgM+pFB6H6QbrrpVrT+Di4PM0I9jRNmXHxYeAwXSkn1Hn16J9S2zFOL+FE0fLQTPlWK0qzSzCymeqNuyeChCc33MSAdKupUv+ohMtCmkZuPui+7uuryWZZ5iUP7vJFIDaVGVS7VMw51UK3lk85BszLeH6bUAog0hpBQ1OpgRFka/ZTwMQ4TZgWdGx4n4mQJk1FOpGOCog6cQIKBQCt9kcbqhJVreWBZMzct6+kDfup5jE+P50MfIBdPVBmGB9MXi8pcuCdUH6mKZ21A01kV+Ap9RahOQE9uYyDOUuFu+p4DDYxa3VKZpScDhxOorwnLgtyD0cLt/aqq/Du49G0i+ooSzToJakoXtM+YiQ1pMvQG/2SiVn4UKcq5NN5uty1Jkj'+
			'G5pXyn9QStK6jwHgwG1uv1bDAY+MniKZ6n4rruCtJV8qh7s7DK7YAAt4f760eHsjF1oJ6iMYB+ledJhQEZRm80JEG4UCFFORbjhs+o6qpplNQql8qksNSmxtP9JLPx5xDMbGwcWhYMt4P4ndaWtTCtWllVgyoPCugYUKlKpWiapmOpsCYbMW6B1ZUzlFcxKKStMk11IahkxS+Uy2u01nRUUYFxmHwpfKnuyHW64Pp4EhSDnNLsSGUWPwdQjDPU04xTzyloFjYYjA5s07HuCBAccCM1ihK2ohyeI0KDolfd8nPz7/nAe3et27DQCClBpZpu1YS13jRNrSrlvV2jzIkApAuMQZWedJw7X3T1xAfv/sjLd1x95YQuvi6WlhM1mDHeNB0+9BfuiY3VExRxmsIyceQOXKOn8xQ14YO6cTx85mlmZrqxtHFpYe9bbtsKV+kD'+
			'cxgnlEb8jnsYl685SFKinqRpdFEU9qa3v2Xp7b/6H7bg7sefP5ZPTnYmtu/cPoPK6HQ6HhB67Eh3gHm1gFIOdKVPJDY4xolb6GafludUQoFs5ZwwO1LXjKLIn11bfmb5NPym2pcFU67GwPSJ8XyFzcyKUaqpakJVDQaeWzs3uXjJ4ryZHSiKYjSeyHZcuWPD7b/5H2ejyKzVajXm5udmvvyFr+x7+O//4Qw1B1JZTSSwl9YIVDWwQF5uab6vaWKYDIQPz2FEEKLF6yRJzFXO3OjIJS4KB9IOSNeFUzfGoL4YIsEr3KXVgkkcx6OjnvJGjRGyjhw+evrk8ZPdynl5d+zUiZN5WFpkHKqQNMbgfejnPBttNF5IEWj6pxqXhnFdfVEOi9Hv98cOR1hkFlktuLVipPtLBB8NFCwaC0hfaVIfGFHaUApgx4DMUxfQmbNjzx'+
			'/rfvXzXz6cZZmtX7y4EUd1cQbuxBv4XhWNUpe+ndlTAZyo2pCb9WUHWgOFLsIapUoZ77ojxK6ZXzPxznfdvt05ZzOzMxOrVk1NfOlzX9r34LfuP6NpLZ9QMai0UqrZcMliI04SO3b4SM59ZVnabW/7xaW5tXOT82vnZ6ampiY+8PEP3RgNJ2uRRbb7ht1bX3Lj7q1mZqtXr55x5izP8vzD7//I/d/b93gXI+OxCjCMqq83UdXkDcvgVWtqsqAUAWIxNKjWTE2vcyNWW9iwfvbsmXPdKDI7e+ZM9/Sp090rrr5y/oF77zujaN771jcvza+dm4yiaPgK58r5w8azszMT09PTE7Rpzmx2zeyMmdkjDz2y/48/evcBAuk3/vKvDv/UK146v3xw+fSD33rgeFVVVlaV/eTuF89c+5JrN372U5/df+rEyTwV/ZqmqT23/GxO'+
			'pNcFVIloZj6x0Uod9GhmlrbbbX+Rc/UmmsqUfr8/pv00h2ZhtEiMS+rn8ceeOPSl//75w6CA+3Rh0zS1pw88fWZufm7S2fAlY1Vk1uv1shPHTnR/+MwPT/t7a240c2bdbjdXNJ98/lj+lT/74uGiKOw/33XHVVEU2Qfe8zv7plZNNS7ZuLhgZvsPLT+bm5m97k0/v3Dppo2zH/u9j+7HaFpi1LSarR/iDTK1pqlR5qXkDxJ1olpW04KNNqYpcegSvMoDY5MAaECC15IksYfue+DMA3/3rTMa0Fhg+iJIKrLCYIMquOEVe2a2vmDL0uOPPXGgqip/xP7sqdN5FEW2bsNC46ZX/vRVKyvdLvPQmAIa9SnHUNnQJ//M5KkZfa8rRtQgBn9hCD0koSpC82y9hv9DpCov88YhfT5VX1eqR3t0t1aN6hd09LObfuamrU89eW'+
			'D59+96/34zs7IqhzrBObv+5S+dee0bbrlqZWWl+753/85DzJnDflr3JYtjnqT3qA8M719FpbUCrfJoMFKZAUJ0YrQBoauxeLrFWR18VNpp5gfidU+MthW9IAQ+pdyoLttoNOwdv/bOLXmW5e+74659NXDMut1e9+ZXv3Jh9w3XbV8+uHz4k3/0yf3HjhzNoyjyb9igLKo1BC18hwCBOvzT3/oSA2SLRmDQF2ZVKjv0eSjQUiO0dhUMTqlPy3MaFLU2oXzG4oIYkK1bKWZDRbKweHHj/Lnz+R+8/8P7NAD1ut387Nlz3ZfcuHv7/370n5+6+0P/9YB6kqbx9K/zUmmlqbTfOgfhoXZjFTCMVot0NwFj9Ho9j7SFxYsbzjm7atcLZ6amphoWma2eWz3hzNn82vmJW279twvza+cnJicnms6ZrZpeNZFnef7B9/7uPtyI'+
			'vSUWjUXQlzeCIi3aaAG9KAp79uAz+Z/+4T3LoH7bzh0TN/3sTRs3bdm08Nyzzx3/0G9/8NHnDx/JoTE+8KRuD7H4GqjoX8uIzrn6DRsqKzS6w7O6ta2UEYr9OI7tTW9783YbJgl5/UCW2eOPPXGgM9FpTk5O5sePHe+eOhF3zSKrXHXazGx2bk3j2JGjP5L1UNzWSTG28A3Nmv0w5sFgYD/7b/71/O4bdm+cnlk18eT3vn/ort967/1HDx3OWaQwMVIlgMqof1/bRgMwSB72OzKsFkG0HkmAIpPRsiIpo1l9qrssS3vfHXftU37V4MekO53OmGShYtTpdPzbLZW3tVqGe2oghBqqqhp7Teutv/QLSwsXL8yePHFy5W+/8TdPPXz/g2f08VRFHAcuGDtgC713aOzx10qrji+Kwla6K0PDagAAfcpXrJqegmHViJwgSu'+
			'sHdKg8jBHKsvSPqcOlLBjBi4nQrvbBQsL9jEE3CT/xsf+2nKbpMshXyagJkdaeQa/yvr4VdBi4xh/LHys4Oed1bKxwBxEqtUAzetesPiGjuk1XVuUPp2O01KgVIVDHnpE+7wA1sbOqi6Uuyj1wLrTBpKEy7V/rG6rD8SCuU8nI2z1CpaAL4t+7xQUqnXRbN3yUx6zesNPKFu2oYdWdGaSqAX6Pkczq4KFSDHRp1Qy60W0XnTCoCx9X1fvCLFDBxbhWVla8x2nidKHayrBvSRDCBICf6SrySj2qV8pxdIJxVMjrE32a2VB90rOqehyIEiPFduSN1o0xIt6kuwa0rYUiRaKWGZGbuh2vtRP1DOarXqr0mTYkeHExUoKfsReGVlQuUg3KwMI6AcjRzTutWg2zM7ak3ZiLquIgMKj3KBcSPJioegBqIYqGb+VEHtKGnoSk'+
			'rfCtx7pjoLsK0AMqJY7jWseqm+HKKm3UpfUNxvCgZkkMVqkAVQHiMFj9+qXYnOOZ+bo/+mEBWRD1LN2+1pIii83b37Suylw0GMPZWoMIH3XSs2hkZngddhjaLao5VqtVymGqFNQFlFf5ng61dFaWdcFa0YrMGQ5ouFj6lmLa5hp9VdUYtwP5I/wAAANPSURBVKEEXL2FVJal3+hjoTnHq2dYuR6j0V8ICH34I/wHRZKtqdf6d3RrqqZ6LpRhKojNah2LQTU9jaI6jWXRtC6gjyzpk4yKfvqgb33EnXbI6/W8GIGS8apBSB40KJO9oSyQbwRbRWu426x7dmUam5lFnmNZHVyenys30jETUY4KuS6kEeU+lVqqmfX91+odQ/SPn11wzllZFBa5+ni8ZmQESd3JZYF1Tiy0niCEpkC9xgmoT9FJ+84563TaZmZ5zFEbFe'+
			'lmtWZjUpoCYkCisGYqXKfIUQToexI1QdBApakqlSuVXhgmiiL/Ah4e1dSiPYYMD9phOEW5JjhwLh8ohjFgMz+Gsn66cmZ6wszsVApSMQYNq6GRPJB/eGAOw2kAoF2N5qonKbhoUNJ2QAELGQYuj1pxQzWECnh9jYrKKZVxBFTmFCoU7tXkRb01z3ObmmzZpqV1ZmZPpZ4bJA1VSaHpIsZlcpphaUQGjTpIjKJ/GoB/IIY0VffStIbBBFQfQ09h8VuzSBYWo/64l7gBCq0Na3ZIrVY9pNFo+Ifztm5asJ3bN5qZPZGqe8OHDEz/MAOGZAHC5whAj27NgBgNEqCa61gQ3cngaxaMe+FPJqLHnTQNV/WBEWhDYwDBRxMkNTDtYXwkXKjpoyiytfMzdt0122x2ZvJjN++981RKgwQqEEAjGlgYqLop92oyAH1o0UZrrHxo'+
			'K8z8MKgiRlNdLZZrRqT6VwGi9+kOiKaxLACcaVaf6maxQS72ANVza6btp3/qaluzetU3bt5751Gz0Yt5VdRD/MMXeadjf1FDS26srmpDJgwXMRD+0Y8GlQvpVbIerd6zYIh7jKa1ADWmanNFtG6OIr0UwYwn5ONwIZjrhvWz9rIbrrLFDXN/ffPeOx+mrXRiouMnODRkfYrZzKzdbllV1SJZn0cdoqDOOnAzzVKazYaZG74uL44jiyKzJIktMmdpY/zvypQFfMvfwC0tMvL08b+TWxTFSEPXpUkK0VSYhqe+zTqdYZ23yAtrtWovbDYb1uv2rNlq+oUcHgIcjI7Et8YQ7dwQUFOTbduwfo1dcfmSXbJh3iYn2z/yt7/T29/+6sL+5fP/8ylt+Nfqj5jZ42b2zIX+Wv3/Ba0pI+GUkslaAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15%;';
		hs+='cursor : pointer;';
		hs+='height : 95px;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_9.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getVariableValue('OpenState') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(player.getVariableValue('OpenState') == false)
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_9.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_9.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_9.style[domTransition]='left 0s, bottom 0s';
				if (me._image_9.ggCurrentLogicStatePosition == 0) {
					me._image_9.style.left='0%';
					me._image_9.style.bottom='15%';
				}
				else if (me._image_9.ggCurrentLogicStatePosition == 1) {
					me._image_9.style.left='-100%';
					me._image_9.style.bottom='15%';
				}
				else {
					me._image_9.style.left='0%';
					me._image_9.style.bottom='15%';
				}
			}
		}
		me._image_9.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me._image_9);
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15%;';
		hs+='cursor : pointer;';
		hs+='height : 95px;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 86px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getVariableValue('OpenState') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(player.getVariableValue('OpenState') == false)
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_8.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_8.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_8.style[domTransition]='right 0s, bottom 0s';
				if (me._image_8.ggCurrentLogicStatePosition == 0) {
					me._image_8.style.right='0%';
					me._image_8.style.bottom='15%';
				}
				else if (me._image_8.ggCurrentLogicStatePosition == 1) {
					me._image_8.style.right='-100%';
					me._image_8.style.bottom='15%';
				}
				else {
					me._image_8.style.right='0%';
					me._image_8.style.bottom='15%';
				}
			}
		}
		me._image_8.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me._image_8);
		me._ui.appendChild(me.__7);
		el=me._helpinformation=document.createElement('div');
		el.ggId="helpInformation";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._helpinformation.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._helpinformation.onclick=function (e) {
			me._helpinformation.style[domTransition]='none';
			me._helpinformation.style.visibility='hidden';
			me._helpinformation.ggVisible=false;
		}
		me._helpinformation.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._userdatabg=document.createElement('div');
		el.ggId="userdatabg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 186px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabg.ggUpdatePosition=function (useTransition) {
		}
		me._helpinformation.appendChild(me._userdatabg);
		el=me._userdatabrd=document.createElement('div');
		el.ggId="userdatabrd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 185px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdatabrd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabrd.ggUpdatePosition=function (useTransition) {
		}
		me._helpinformation.appendChild(me._userdatabrd);
		el=me._title=document.createElement('div');
		els=me._title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 266px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 266px;';
		hs+='height: 31px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 25px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u7248\u6743\u6240\u6709";
		el.appendChild(els);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title.ggUpdatePosition=function (useTransition) {
		}
		me._helpinformation.appendChild(me._title);
		el=me._author=document.createElement('div');
		els=me._author__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="author";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 34px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : 227px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 227px;';
		hs+='height: 34px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 21px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._author.ggUpdateText=function() {
			var hs=me.ggUserdata.author+"\u6df1\u5733\u804c\u4e1a\u6280\u672f\u5b66\u9662";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._author.ggUpdateText();
		el.appendChild(els);
		me._author.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._author.ggUpdatePosition=function (useTransition) {
		}
		me._helpinformation.appendChild(me._author);
		el=me._datetime=document.createElement('div');
		els=me._datetime__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="datetime";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 94px;';
		hs+='visibility : inherit;';
		hs+='width : 315px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 315px;';
		hs+='height: 25px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._datetime.ggUpdateText=function() {
			var hs=me.ggUserdata.author+"\u865a\u62df\u73b0\u5b9e\uff08VR\uff09\u6280\u672f\u5b9e\u9a8c\u5ba4";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._datetime.ggUpdateText();
		el.appendChild(els);
		me._datetime.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._datetime.ggUpdatePosition=function (useTransition) {
		}
		me._helpinformation.appendChild(me._datetime);
		el=me._copyright=document.createElement('div');
		els=me._copyright__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="copyright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 34px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 145px;';
		hs+='visibility : inherit;';
		hs+='width : 324px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 324px;';
		hs+='height: 34px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._copyright.ggUpdateText=function() {
			var hs="&#169; "+me.ggUserdata.copyright+" <a href=\"https:\/\/www.szpt.edu.cn\" target=\"_blank\">https:\/\/www.szpt.edu.cn\/<\/a>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._copyright.ggUpdateText();
		el.appendChild(els);
		me._copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._copyright.ggUpdatePosition=function (useTransition) {
		}
		me._helpinformation.appendChild(me._copyright);
		me._ui.appendChild(me._helpinformation);
		me.__6.appendChild(me._ui);
		me.divSkin.appendChild(me.__6);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 350px;';
		hs+='position : absolute;';
		hs+='top : 210px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me._timer_1.ggIsActive() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style[domTransition]='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.ggDeactivate=function () {
			if (
				(
					(player.getVariableValue('GotoMap') == true)
				)
			) {
				player.openNext("{"+player.getNextNode()+"}","");
			}
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me.__=document.createElement('div');
		el.ggId="\u5171\u6709\u8d44\u6e90";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5=document.createElement('div');
		el.ggId="\u52a0\u8f7d\u8fdb\u5ea6\u6761";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.__5.appendChild(me._loading);
		me.__.appendChild(me.__5);
		el=me.__4=document.createElement('div');
		el.ggId="\u5730\u6807\u70ed\u70b9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__.appendChild(me.__4);
		el=me.__2=document.createElement('div');
		el.ggId="\u56fe\u7247\u70ed\u70b9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._screentint_info0=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -0.11%;';
		hs+='position : absolute;';
		hs+='top : -0.17%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._screentint_info0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_info_popup_3') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info0.style[domTransition]='';
				if (me._screentint_info0.ggCurrentLogicStateVisible == 0) {
					me._screentint_info0.style.visibility=(Number(me._screentint_info0.style.opacity)>0||!me._screentint_info0.style.opacity)?'inherit':'hidden';
					me._screentint_info0.ggVisible=true;
				}
				else {
					me._screentint_info0.style.visibility="hidden";
					me._screentint_info0.ggVisible=false;
				}
			}
		}
		me._screentint_info0.onclick=function (e) {
			player.setVariableValue('vis_info_popup_3', false);
			player.setVolume("_main",1);
			player.setVariableValue('ImageFolder', "");
			player.setVariableValue('ImageHTML', "");
		}
		me._screentint_info0.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me._screentint_info0);
		el=me._popup_image=document.createElement('div');
		el.ggId="popup_image";
		el.ggDx=0;
		el.ggDy=-27;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(player.getIsMobile() == false)
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._popup_image.ggCurrentLogicStateSize != newLogicStateSize) {
				me._popup_image.ggCurrentLogicStateSize = newLogicStateSize;
				me._popup_image.style[domTransition]='width 0s, height 0s';
				if (me._popup_image.ggCurrentLogicStateSize == 0) {
					me._popup_image.style.width='70%';
					me._popup_image.style.height='70%';
					skin.updateSize(me._popup_image);
				}
				else if (me._popup_image.ggCurrentLogicStateSize == 1) {
					me._popup_image.style.width='100%';
					me._popup_image.style.height='100%';
					skin.updateSize(me._popup_image);
				}
				else {
					me._popup_image.style.width='70%';
					me._popup_image.style.height='70%';
					skin.updateSize(me._popup_image);
				}
			}
		}
		me._popup_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_info_popup_3') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image.style[domTransition]='width 0s, height 0s';
				if (me._popup_image.ggCurrentLogicStateVisible == 0) {
					me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
					me._popup_image.ggVisible=true;
				}
				else {
					me._popup_image.style.visibility="hidden";
					me._popup_image.ggVisible=false;
				}
			}
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._extermal_border=document.createElement('div');
		el.ggId="extermal_border";
		el.ggDx=0;
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 200px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._extermal_border.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._extermal_border.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._popup_image.appendChild(me._extermal_border);
		el=me._info_popup_close_1=document.createElement('div');
		els=me._info_popup_close_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQyOTE0MzI5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2NDUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI5LjIxNiAwIDAgMjI5LjIxNiAwIDUxMmMwIDI4Mi43NjggMjI5LjIxNiA1MTIgNTEyIDUxMiAyODIuNzUyIDAgNTEyLTIyOS4yMzIgNTEyLTUxMkMxMDI0IDIyOS4yMTYgNzk0Ljc1MiAwIDUxMiAwek01MTIgOTkyQzI0Ni44OTYgOTkyIDMyIDc3Ny4wODggMzIgNTEyIDMyIDI0Ni44OTYgMjQ2Ljg5NiAzMiA1MTIgMzJjMjY1LjA3MiAwIDQ4MCAyMTQuODk2IDQ4MCA0ODBDOTkyIDc3Ny4wODggNzc3LjA3MiA5OTIgNTEyIDk5MnoiIHAtaWQ9IjE2NDYiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJN'+
			'NTM0LjYyNCA1MTJsMjAzLjY2NC0yMDMuNjQ4YzYuMjQtNi4yNTYgNi4yNC0xNi4zODQgMC0yMi42MjQtNi4yNTYtNi4yNC0xNi4zODQtNi4yNTYtMjIuNjQgMEw1MTIgNDg5LjM2IDMwOC4zNTIgMjg1LjcyOGMtNi4yNTYtNi4yNTYtMTYuMzY4LTYuMjU2LTIyLjYyNCAwcy02LjI1NiAxNi4zNjggMCAyMi42MjRMNDg5LjM2IDUxMiAyODUuNzI4IDcxNS42NDhjLTYuMjU2IDYuMjcyLTYuMjQgMTYuMzg0IDAgMjIuNjQgNi4yNCA2LjI0IDE2LjM2OCA2LjI1NiAyMi42MjQgMEw1MTIgNTM0LjYyNGwyMDMuNjQ4IDIwMy42NjRjNi4yNzIgNi4yNTYgMTYuMzg0IDYuMjQgMjIuNjQgMCA2LjI0LTYuMj'+
			'U2IDYuMjU2LTE2LjM2OCAwLTIyLjY0TDUzNC42MjQgNTEyeiIgcC1pZD0iMTY0NyIgZmlsbD0iI2YzZDViOSI+PC9wYXRoPjwvc3ZnPg==';
		me._info_popup_close_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;info_popup_close_1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_popup_close_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.5,sy:1.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -6.03%;';
		hs+='top : -8.81%;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._info_popup_close_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == false)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info_popup_close_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info_popup_close_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info_popup_close_1.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._info_popup_close_1.ggCurrentLogicStatePosition == 0) {
					me._info_popup_close_1.style.right='-6.03%';
					me._info_popup_close_1.style.top='-8.81%';
				}
				else if (me._info_popup_close_1.ggCurrentLogicStatePosition == 1) {
					me._info_popup_close_1.style.right='15%';
					me._info_popup_close_1.style.top='18%';
				}
				else {
					me._info_popup_close_1.style.right='-6.03%';
					me._info_popup_close_1.style.top='-8.81%';
				}
			}
		}
		me._info_popup_close_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.elementMouseOver['info_popup_close_1'] == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._info_popup_close_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._info_popup_close_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._info_popup_close_1.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 250ms ease 0ms';
				if (me._info_popup_close_1.ggCurrentLogicStateScaling == 0) {
					me._info_popup_close_1.ggParameter.sx = 1.2;
					me._info_popup_close_1.ggParameter.sy = 1.2;
					me._info_popup_close_1.style[domTransform]=parameterToTransform(me._info_popup_close_1.ggParameter);
				}
				else {
					me._info_popup_close_1.ggParameter.sx = 1.5;
					me._info_popup_close_1.ggParameter.sy = 1.5;
					me._info_popup_close_1.style[domTransform]=parameterToTransform(me._info_popup_close_1.ggParameter);
				}
			}
		}
		me._info_popup_close_1.onclick=function (e) {
			player.setVariableValue('vis_info_popup_3', false);
			player.setVariableValue('ImageFolder', "");
			player.setVariableValue('ImageHTML', "");
			player.setVolume("_main",1);
		}
		me._info_popup_close_1.onmouseover=function (e) {
			me.elementMouseOver['info_popup_close_1']=true;
			me._info_popup_close_1.logicBlock_scaling();
		}
		me._info_popup_close_1.onmouseout=function (e) {
			me.elementMouseOver['info_popup_close_1']=false;
			me._info_popup_close_1.logicBlock_scaling();
		}
		me._info_popup_close_1.ontouchend=function (e) {
			me.elementMouseOver['info_popup_close_1']=false;
			me._info_popup_close_1.logicBlock_scaling();
		}
		me._info_popup_close_1.ggUpdatePosition=function (useTransition) {
		}
		me._popup_image.appendChild(me._info_popup_close_1);
		el=me._iframeimage=document.createElement('div');
		els=me._iframeimage__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="iframeImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._iframeimage.ggUpdateText=function() {
			var hs="<iframe src=\"swiper\/"+player.getVariableValue('ImageHTML')+".html\" width=\"100%\" style=\"min-width:300px\" height=\"100%\" frameborder= \"0\" scrolling=\"no\"><\/iframe>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._iframeimage.ggUpdateText();
		el.appendChild(els);
		me._iframeimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframeimage.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(player.getIsMobile() == false)
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._iframeimage.ggCurrentLogicStateSize != newLogicStateSize) {
				me._iframeimage.ggCurrentLogicStateSize = newLogicStateSize;
				me._iframeimage.style[domTransition]='width 0s, height 0s';
				if (me._iframeimage.ggCurrentLogicStateSize == 0) {
					me._iframeimage.style.width='100%';
					me._iframeimage.style.height='100%';
					skin.updateSize(me._iframeimage);
				}
				else if (me._iframeimage.ggCurrentLogicStateSize == 1) {
					me._iframeimage.style.width='100%';
					me._iframeimage.style.height='50%';
					skin.updateSize(me._iframeimage);
				}
				else {
					me._iframeimage.style.width='100%';
					me._iframeimage.style.height='100%';
					skin.updateSize(me._iframeimage);
				}
			}
		}
		me._iframeimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._imagetext=document.createElement('div');
		els=me._imagetext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ImageText";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -15%;';
		hs+='height : 15%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 10px 11px 10px 11px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._imagetext.ggUpdateText=function() {
			var hs=player.getVariableValue('ImageText');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._imagetext.ggUpdateText();
		el.appendChild(els);
		me._imagetext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._imagetext.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == false)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._imagetext.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._imagetext.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._imagetext.style[domTransition]='left 0s, bottom 0s, width 0s, height 0s';
				if (me._imagetext.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._imagetext.style.bottom='-15%';
					me._imagetext.ggUpdatePosition(true);
				}
				else if (me._imagetext.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 0;
					me._imagetext.style.bottom='-30%';
					me._imagetext.ggUpdatePosition(true);
				}
				else {
					me._imagetext.ggDx=0;
					me._imagetext.style.bottom='-15%';
					me._imagetext.ggUpdatePosition(true);
				}
			}
		}
		me._imagetext.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(player.getIsMobile() == false)
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._imagetext.ggCurrentLogicStateSize != newLogicStateSize) {
				me._imagetext.ggCurrentLogicStateSize = newLogicStateSize;
				me._imagetext.style[domTransition]='left 0s, bottom 0s, width 0s, height 0s';
				if (me._imagetext.ggCurrentLogicStateSize == 0) {
					me._imagetext.style.width='100%';
					me._imagetext.style.height='15%';
					skin.updateSize(me._imagetext);
				}
				else if (me._imagetext.ggCurrentLogicStateSize == 1) {
					me._imagetext.style.width='100%';
					me._imagetext.style.height='30%';
					skin.updateSize(me._imagetext);
				}
				else {
					me._imagetext.style.width='100%';
					me._imagetext.style.height='15%';
					skin.updateSize(me._imagetext);
				}
			}
		}
		me._imagetext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._iframeimage.appendChild(me._imagetext);
		me._popup_image.appendChild(me._iframeimage);
		me.__2.appendChild(me._popup_image);
		el=me.__3=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=250;
		el.ggId="\u70ed\u70b9\u52a8\u753b\u95f4\u9694";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3.ggIsActive=function() {
			return (me.__3.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me.__3.ggTimestamp) / me.__3.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.ggActivate=function () {
			player.setVariableValue('ht_ani', !player.getVariableValue('ht_ani'));
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me.__3);
		me.__.appendChild(me.__2);
		el=me.__1=document.createElement('div');
		el.ggId="\u7ed3\u675f\u5e55";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._mark=document.createElement('div');
		els=me._mark__img=document.createElement('img');
		els.className='ggskin ggskin_mark';
		hs=basePath + 'images/mark.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Mark";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 350px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mark.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('end') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(player.getVariableValue('end') == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mark.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mark.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mark.style[domTransition]='';
				if (me._mark.ggCurrentLogicStateVisible == 0) {
					me._mark.style.visibility=(Number(me._mark.style.opacity)>0||!me._mark.style.opacity)?'inherit':'hidden';
					me._mark.ggVisible=true;
				}
				else if (me._mark.ggCurrentLogicStateVisible == 1) {
					me._mark.style.visibility="hidden";
					me._mark.ggVisible=false;
				}
				else {
					me._mark.style.visibility=(Number(me._mark.style.opacity)>0||!me._mark.style.opacity)?'inherit':'hidden';
					me._mark.ggVisible=true;
				}
			}
		}
		me._mark.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 999%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 999%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.onclick=function (e) {
			player.setVariableValue('end', false);
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._mark.appendChild(me._rectangle_1);
		me.__1.appendChild(me._mark);
		me.__.appendChild(me.__1);
		el=me.__0=document.createElement('div');
		el.ggId="\u524d\u8a00";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._screentint_info=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._screentint_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_info_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info.style[domTransition]='';
				if (me._screentint_info.ggCurrentLogicStateVisible == 0) {
					me._screentint_info.style.visibility=(Number(me._screentint_info.style.opacity)>0||!me._screentint_info.style.opacity)?'inherit':'hidden';
					me._screentint_info.ggVisible=true;
				}
				else {
					me._screentint_info.style.visibility="hidden";
					me._screentint_info.ggVisible=false;
				}
			}
		}
		me._screentint_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		me.__0.appendChild(me._screentint_info);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_info_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg=document.createElement('div');
		el.ggId="informationbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._informationbg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 224px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 276px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 276px;';
		hs+='height: 224px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIG9wYWNpdHk9IjAuNCI+DQoJPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40'+
			'NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNj'+
			'c4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIy'+
			'LDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzDQoJCWMtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDENCgkJYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuND'+
			'Y3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMA0KCQlsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MQ0KCQljLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4'+
			'OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2DQoJCWMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIvPg0KPC9nPg0KPC9zdmc+DQo=';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_info_close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4NCgk8cGF0aCBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5Mw0KCQljLTAuNDY3'+
			'LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwDQoJCWMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMQ0KCQlsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjENCgkJYy00Ljg4Mi'+
			'00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDANCgkJQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNg0KCQljMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OQ0KCQljMS45NzUsMS45'+
			'NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0DQoJCWMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS'+
			'42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDENCgkJYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxDQoJCWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwDQoJCUMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0x'+
			'Ny42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4DQoJCWM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkNCgkJQzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45Ng0KCQljMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OS'+
			'w3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4DQoJCUMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_info_close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._ht_info_close);
		me.__0.appendChild(me._information);
		me.__.appendChild(me.__0);
		me.divSkin.appendChild(me.__);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_2.onclick=function (e) {
			me._rectangle_2.style[domTransition]='none';
			me._rectangle_2.style.visibility='hidden';
			me._rectangle_2.ggVisible=false;
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs=basePath + 'images/image_12.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 720px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 405px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_2.appendChild(me._image_12);
		me.divSkin.appendChild(me._rectangle_2);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._cloner_1.ggUpdate();
			me._thumbnail_cloner.ggUpdate();
			me._thumbnail_cloner_mobile.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._scrollarea_1.ggUpdatePosition();
			me._thumbnail_menu.ggUpdatePosition();
			me._timer_black.ggTimestamp=me.ggCurrentTime;
			me._timer_black.ggTimeout=2000;
			me._timer_green.ggTimestamp=me.ggCurrentTime;
			me._timer_green.ggTimeout=1500;
			me._timer_yellow.ggTimestamp=me.ggCurrentTime;
			me._timer_yellow.ggTimeout=1000;
			me._timer_text.ggTimestamp=me.ggCurrentTime;
			me._timer_text.ggTimeout=4000;
			me._timer_text_link.ggTimestamp=me.ggCurrentTime;
			me._timer_text_link.ggTimeout=5000;
			me._timer_close.ggTimestamp=me.ggCurrentTime;
			me._timer_close.ggTimeout=8000;
			me._thumbnail_menu_mobile.ggUpdatePosition();
			me._timer_1.ggTimestamp=me.ggCurrentTime;
			me._timer_1.ggTimeout=20000;
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		player.addListener('beforechangenode', function() {
			if (
				(
					(player.getVariableValue('vis_loader') == true)
				)
			) {
				me._loading.style[domTransition]='none';
				me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
				me._loading.ggVisible=true;
			}
		});
		player.addListener('tilesrequested', function() {
			player.setVariableValue('vis_loader', false);
		});
		player.addListener('varchanged_GotoMap', function() {me._image_list1.ggVisible = !me._image_list1.ggVisible;var flag=me._image_list1.ggVisible;me._image_list1.style[domTransition]='none';me._image_list1.style.visibility=((flag)&&(Number(me._image_list1.style.opacity)>0||!me._image_list1.style.opacity))?'inherit':'hidden';me._image_list_0.ggVisible = !me._image_list_0.ggVisible;var flag=me._image_list_0.ggVisible;me._image_list_0.style[domTransition]='none';me._image_list_0.style.visibility=((flag)&&(Number(me._image_list_0.style.opacity)>0||!me._image_list_0.style.opacity))?'inherit':'hidden';me._image_list.ggVisible = !me._image_list.ggVisible;var flag=me._image_list.ggVisible;me._image_list.style[domTransition]='none';me._image_list.style.visibility=((flag)&&(Number(me._image_list.style.opacity)>0||!me._image_list.style.opacity))?'inherit':'hidden';me._image_list_.ggVisible = !me._image_list_.ggVisible;var flag=me._image_list_.ggVisible;me._image_list_.style[domTransition]='none';me._image_list_.style.visibility=((flag)&&(Number(me._image_list_.style.opacity)>0||!me._image_list_.style.opacity))?'inherit':'hidden';});
		player.addListener('varchanged_vis_loc_text', function() {me._roomdropdowncontainer0.ggVisible = !me._roomdropdowncontainer0.ggVisible;var flag=me._roomdropdowncontainer0.ggVisible;me._roomdropdowncontainer0.style[domTransition]='none';me._roomdropdowncontainer0.style.visibility=((flag)&&(Number(me._roomdropdowncontainer0.style.opacity)>0||!me._roomdropdowncontainer0.style.opacity))?'inherit':'hidden';me._roomdropdowncontainer.ggVisible = !me._roomdropdowncontainer.ggVisible;var flag=me._roomdropdowncontainer.ggVisible;me._roomdropdowncontainer.style[domTransition]='none';me._roomdropdowncontainer.style.visibility=((flag)&&(Number(me._roomdropdowncontainer.style.opacity)>0||!me._roomdropdowncontainer.style.opacity))?'inherit':'hidden';});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_position_sizechanged = function(){
		if(hotspotTemplates['ht_position']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_position'].length; i++) {
				if (hotspotTemplates['ht_position'][i]._ht_position.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._ht_position.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_position_changenode = function(){
		if(hotspotTemplates['ht_position']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_position'].length; i++) {
				if (hotspotTemplates['ht_position'][i]._ht_position.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._ht_position.logicBlock_visible();
				}
				if (hotspotTemplates['ht_position'][i]._hotspot_preview && hotspotTemplates['ht_position'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_position'][i]._tt_ht_node && hotspotTemplates['ht_position'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_position'][i]._ht_tooltip && hotspotTemplates['ht_position'][i]._ht_tooltip.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._ht_tooltip.logicBlock_visible();
				}
				if (hotspotTemplates['ht_position'][i]._ht_checkmark_tick && hotspotTemplates['ht_position'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_position_configloaded = function(){
		if(hotspotTemplates['ht_position']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_position'].length; i++) {
				if (hotspotTemplates['ht_position'][i]._hotspot_preview && hotspotTemplates['ht_position'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_position'][i]._tt_ht_node && hotspotTemplates['ht_position'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['ht_position'][i]._tt_ht_node.logicBlock_position();
				}
				if (hotspotTemplates['ht_position'][i]._tt_ht_node && hotspotTemplates['ht_position'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_position_mouseover = function(){
		if(hotspotTemplates['ht_position']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_position'].length; i++) {
				if (hotspotTemplates['ht_position'][i]._hotspot_preview && hotspotTemplates['ht_position'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_position'][i]._tt_ht_node && hotspotTemplates['ht_position'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_position_active = function(){
		if(hotspotTemplates['ht_position']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_position'].length; i++) {
				if (hotspotTemplates['ht_position'][i]._ht_checkmark_tick && hotspotTemplates['ht_position'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_position_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_position']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_position'].length; i++) {
				if (hotspotTemplates['ht_position'][i]._ht_position.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._ht_position.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_position_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_position']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_position'].length; i++) {
				if (hotspotTemplates['ht_position'][i]._ht_position.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._ht_position.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_position_varchanged_opt_hotspot_preview = function(){
		if(hotspotTemplates['ht_position']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_position'].length; i++) {
				if (hotspotTemplates['ht_position'][i]._hotspot_preview && hotspotTemplates['ht_position'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._hotspot_preview.logicBlock_visible();
				}
				if (hotspotTemplates['ht_position'][i]._tt_ht_node && hotspotTemplates['ht_position'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_position'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_changenode = function(){
		if(hotspotTemplates['ht_Image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Image'].length; i++) {
				if (hotspotTemplates['ht_Image'][i]._ht_image.logicBlock_scaling) {
					hotspotTemplates['ht_Image'][i]._ht_image.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_Image'][i]._hotspotring && hotspotTemplates['ht_Image'][i]._hotspotring.logicBlock_alpha) {
					hotspotTemplates['ht_Image'][i]._hotspotring.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_Image'][i]._hotspotring && hotspotTemplates['ht_Image'][i]._hotspotring.logicBlock_scaling) {
					hotspotTemplates['ht_Image'][i]._hotspotring.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_ht_ani = function(){
		if(hotspotTemplates['ht_Image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Image'].length; i++) {
				if (hotspotTemplates['ht_Image'][i]._ht_image.logicBlock_scaling) {
					hotspotTemplates['ht_Image'][i]._ht_image.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_Image'][i]._hotspotring && hotspotTemplates['ht_Image'][i]._hotspotring.logicBlock_alpha) {
					hotspotTemplates['ht_Image'][i]._hotspotring.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_Image'][i]._hotspotring && hotspotTemplates['ht_Image'][i]._hotspotring.logicBlock_scaling) {
					hotspotTemplates['ht_Image'][i]._hotspotring.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_preface_configloaded = function(){
		if(hotspotTemplates['ht_info_preface']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_preface'].length; i++) {
				if (hotspotTemplates['ht_info_preface'][i]._tt_information && hotspotTemplates['ht_info_preface'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info_preface'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_preface_mouseover = function(){
		if(hotspotTemplates['ht_info_preface']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_preface'].length; i++) {
				if (hotspotTemplates['ht_info_preface'][i]._tt_information && hotspotTemplates['ht_info_preface'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info_preface'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._author1.ggUpdateText();
		me._datetime1.ggUpdateText();
		me._copyright1.ggUpdateText();
		me._text.ggUpdateText();
		me._right_1.ggUpdateText();
		if (me.elementMouseDown['up']) {
			player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['left']) {
			player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(1,true);
		}
		if (me._timer_black.ggLastIsActive!=me._timer_black.ggIsActive()) {
			me._timer_black.ggLastIsActive=me._timer_black.ggIsActive();
			if (me._timer_black.ggLastIsActive) {
			} else {
				if (player.transitionsDisabled) {
					me._svg_black_over.style[domTransition]='none';
				} else {
					me._svg_black_over.style[domTransition]='all 2000ms ease-out 0ms';
				}
				me._svg_black_over.ggParameter.rx=-482;me._svg_black_over.ggParameter.ry=0;
				me._svg_black_over.style[domTransform]=parameterToTransform(me._svg_black_over.ggParameter);
				if (player.transitionsDisabled) {
					me._svg_black_under.style[domTransition]='none';
				} else {
					me._svg_black_under.style[domTransition]='all 2000ms ease-out 0ms';
				}
				me._svg_black_under.ggParameter.rx=-482;me._svg_black_under.ggParameter.ry=0;
				me._svg_black_under.style[domTransform]=parameterToTransform(me._svg_black_under.ggParameter);
			}
		}
		me._timer_black.ggUpdateConditionTimer();
		if (me._timer_green.ggLastIsActive!=me._timer_green.ggIsActive()) {
			me._timer_green.ggLastIsActive=me._timer_green.ggIsActive();
			if (me._timer_green.ggLastIsActive) {
			} else {
				if (player.transitionsDisabled) {
					me._image_4.style[domTransition]='none';
				} else {
					me._image_4.style[domTransition]='all 2000ms ease-out 0ms';
				}
				me._image_4.ggParameter.rx=-482;me._image_4.ggParameter.ry=0;
				me._image_4.style[domTransform]=parameterToTransform(me._image_4.ggParameter);
			}
		}
		me._timer_green.ggUpdateConditionTimer();
		if (me._timer_yellow.ggLastIsActive!=me._timer_yellow.ggIsActive()) {
			me._timer_yellow.ggLastIsActive=me._timer_yellow.ggIsActive();
			if (me._timer_yellow.ggLastIsActive) {
			} else {
				if (player.transitionsDisabled) {
					me._image_5.style[domTransition]='none';
				} else {
					me._image_5.style[domTransition]='all 3000ms ease-out 0ms';
				}
				me._image_5.ggParameter.rx=-482;me._image_5.ggParameter.ry=0;
				me._image_5.style[domTransform]=parameterToTransform(me._image_5.ggParameter);
				if (player.transitionsDisabled) {
					me._image_6.style[domTransition]='none';
				} else {
					me._image_6.style[domTransition]='all 3000ms ease-out 0ms';
				}
				me._image_6.ggParameter.rx=-482;me._image_6.ggParameter.ry=0;
				me._image_6.style[domTransform]=parameterToTransform(me._image_6.ggParameter);
			}
		}
		me._timer_yellow.ggUpdateConditionTimer();
		if (me._timer_text.ggLastIsActive!=me._timer_text.ggIsActive()) {
			me._timer_text.ggLastIsActive=me._timer_text.ggIsActive();
			if (me._timer_text.ggLastIsActive) {
			} else {
				me._txt_main.style[domTransition]='none';
				me._txt_main.style.opacity='1';
				me._txt_main.style.visibility=me._txt_main.ggVisible?'inherit':'hidden';
				me._txt_title.style[domTransition]='none';
				me._txt_title.style.opacity='1';
				me._txt_title.style.visibility=me._txt_title.ggVisible?'inherit':'hidden';
				if (player.transitionsDisabled) {
					me._txt_title.style[domTransition]='none';
				} else {
					me._txt_title.style[domTransition]='all 1000ms ease-out 0ms';
				}
				me._txt_title.ggParameter.rx=0;me._txt_title.ggParameter.ry=40;
				me._txt_title.style[domTransform]=parameterToTransform(me._txt_title.ggParameter);
			}
		}
		me._timer_text.ggUpdateConditionTimer();
		if (me._timer_text_link.ggLastIsActive!=me._timer_text_link.ggIsActive()) {
			me._timer_text_link.ggLastIsActive=me._timer_text_link.ggIsActive();
			if (me._timer_text_link.ggLastIsActive) {
			} else {
				me._txt_link.style[domTransition]='none';
				me._txt_link.style.opacity='1';
				me._txt_link.style.visibility=me._txt_link.ggVisible?'inherit':'hidden';
			}
		}
		me._timer_text_link.ggUpdateConditionTimer();
		if (me._timer_close.ggLastIsActive!=me._timer_close.ggIsActive()) {
			me._timer_close.ggLastIsActive=me._timer_close.ggIsActive();
			if (me._timer_close.ggLastIsActive) {
			} else {
				me.__10.style[domTransition]='none';
				me.__10.style.opacity='0';
				me.__10.style.visibility='hidden';
			}
		}
		me._timer_close.ggUpdateConditionTimer();
		me._author0.ggUpdateText();
		me._datetime0.ggUpdateText();
		me._copyright0.ggUpdateText();
		me._author.ggUpdateText();
		me._datetime.ggUpdateText();
		me._copyright.ggUpdateText();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
			} else {
				if (
					(
						(player.getVariableValue('GotoMap') == true)
					)
				) {
					player.openNext("{"+player.getNextNode()+"}","");
				}
			}
		}
		me._timer_1.ggUpdateConditionTimer();
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		me._iframeimage.ggUpdateText();
		me._imagetext.ggUpdateText();
		if (me.__3.ggLastIsActive!=me.__3.ggIsActive()) {
			me.__3.ggLastIsActive=me.__3.ggIsActive();
			if (me.__3.ggLastIsActive) {
				player.setVariableValue('ht_ani', !player.getVariableValue('ht_ani'));
			} else {
			}
		}
		me._info_text_body.ggUpdateText();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_position(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_position=document.createElement('div');
		el.ggId="ht_position";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 112px;';
		hs+='position : absolute;';
		hs+='top : 207px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_position.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_position.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.getVariableValue('vis_userdata') == true) || 
				(player.getVariableValue('vis_image_popup') == true) || 
				(player.getVariableValue('vis_info_popup') == true) || 
				(player.getVariableValue('vis_video_popup_file') == true) || 
				(player.getVariableValue('vis_video_popup_url') == true) || 
				(player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(player.getVariableValue('vis_video_popup_youtube') == true) || 
				(player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_position.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_position.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_position.style[domTransition]='';
				if (me._ht_position.ggCurrentLogicStateVisible == 0) {
					me._ht_position.style.visibility="hidden";
					me._ht_position.ggVisible=false;
				}
				else {
					me._ht_position.style.visibility=(Number(me._ht_position.style.opacity)>0||!me._ht_position.style.opacity)?'inherit':'hidden';
					me._ht_position.ggVisible=true;
				}
			}
		}
		me._ht_position.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_position.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_position.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_position']=true;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_position.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_position']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_position.ontouchend=function (e) {
			me.elementMouseOver['ht_position']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
		}
		me._ht_position.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_preview=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="hotspot_preview";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -150px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_position'] == true) && 
				(player.getVariableValue('opt_hotspot_preview') == true) && 
				(player.getIsTour() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style[domTransition]='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._ht_preview_picture_frame_=document.createElement('div');
		el.ggId="ht_preview_picture_frame ";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_preview_picture_frame_.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_preview_picture_frame_);
		el=me._ht_preview_nodeimage=document.createElement('div');
		els=me._ht_preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_preview_nodeimage;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_preview_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._ht_preview_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_preview_nodeimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_preview_nodeimage);
		el=me._ht_tooltip=document.createElement('div');
		els=me._ht_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_tooltip.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_tooltip.ggUpdateText();
		el.appendChild(els);
		me._ht_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.hotspot.title == "")
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tooltip.style[domTransition]='';
				if (me._ht_tooltip.ggCurrentLogicStateVisible == 0) {
					me._ht_tooltip.style.visibility="hidden";
					me._ht_tooltip.ggVisible=false;
				}
				else {
					me._ht_tooltip.style.visibility=(Number(me._ht_tooltip.style.opacity)>0||!me._ht_tooltip.style.opacity)?'inherit':'hidden';
					me._ht_tooltip.ggVisible=true;
				}
			}
		}
		me._ht_tooltip.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hotspot_preview.appendChild(me._ht_tooltip);
		el=me._ht_checkmark_tick=document.createElement('div');
		els=me._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0yNDAgMzMyIDEzMCAxMzA7IiBpZD0iTGF5ZXJfMSIgeT0iMHB4IiB2aWV3Qm94PSItMjQwIDMzMiAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9Ij'+
			'BweCIgdmVyc2lvbj0iMS4xIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_checkmark_tick;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true) || 
				(me._ht_checkmark_tick.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style[domTransition]='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_checkmark_tick);
		me._ht_position.appendChild(me._hotspot_preview);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_node.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_node.ggUpdateText();
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_node.style.top='-47px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_node.ggDx=0;
					me._tt_ht_node.style.top='22px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_position'] == true) && 
				(me.hotspot.title != "") && 
				(player.getIsTour() == false) && 
				(player.getVariableValue('opt_hotspot_preview') == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				(me.elementMouseOver['ht_position'] == true) && 
				(me.hotspot.title != "") && 
				(player.getIsTour() == true) && 
				(player.getVariableValue('opt_hotspot_preview') == false)
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				(me.elementMouseOver['ht_position'] == true) && 
				(me.hotspot.title != "") && 
				(player.getIsTour() == false) && 
				(player.getVariableValue('opt_hotspot_preview') == true)
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_position.appendChild(me._tt_ht_node);
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs=basePath + 'images/image_7.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_position.appendChild(me._image_7);
		me.ggUse3d=true;
		me.gg3dDistance=500;
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._ht_tooltip.ggUpdateText();
				me._tt_ht_node.ggUpdateText();
			}
			me.hotspotTimerEvent();
		me.__div = me._ht_position;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_Image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 143px;';
		hs+='position : absolute;';
		hs+='top : 497px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getVariableValue('ht_ani') == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_image.ggCurrentLogicStateScaling == 0) {
					me._ht_image.ggParameter.sx = 1.2;
					me._ht_image.ggParameter.sy = 1.2;
					me._ht_image.style[domTransform]=parameterToTransform(me._ht_image.ggParameter);
				}
				else {
					me._ht_image.ggParameter.sx = 1;
					me._ht_image.ggParameter.sy = 1;
					me._ht_image.style[domTransform]=parameterToTransform(me._ht_image.ggParameter);
				}
			}
		}
		me._ht_image.onclick=function (e) {
			player.setVariableValue('vis_info_popup_3', true);
			player.setVariableValue('ImageText', me.hotspot.description);
			player.setVariableValue('ImageHTML', me.hotspot.title);
			player.setVolume("_main",0);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image=document.createElement('div');
		els=me._ht_image_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQzMTIzOTY4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjAxLjUgMTEzLjljOS41IDAgMTguNSAzLjggMjUuNCAxMC42IDYuOCA2LjggMTAuNiAxNS45IDEwLjYgMjUuNHMtMy44IDE4LjUtMTAuNiAyNS40Yy02LjggNi44LTE1LjkgMTAuNi0yNS40IDEwLjZoLTE4MGMtOS41IDAtMTguNS0zLjgtMjUuNC0xMC42LTYuOC02LjgtMTAuNi0xNS45LTEwLjYtMjUuNCAwLTkuNSAzLjgtMTguNSAxMC42LTI1LjQgNi44LTYuOCAxNS45LTEwLjYgMjUuNC0xMC42aDE4MG0wLTQ4aC0xODBjLTQ2LjIgMC04NCAzNy44LTg0IDg0czM3LjggODQgODQgODRoMTgwYzQ2LjIgMCA4NC0zNy44IDg0'+
			'LTg0cy0zNy44LTg0LTg0LTg0eiIgcC1pZD0iMjQyMiIgZmlsbD0iI2YzZDViOSI+PC9wYXRoPjxwYXRoIGQ9Ik03NjEuNiA5NTkuNUgyNjEuM2MtNjguMyAwLTEyMy45LTU1LjYtMTIzLjktMTI0di01ODBjMC02OC40IDU1LjYtMTI0IDEyMy45LTEyNGgyYzEzLjMgMCAyNCAxMC43IDI0IDI0cy0xMC43IDI0LTI0IDI0aC0yYy00MS44IDAtNzUuOSAzNC4xLTc1LjkgNzZ2NTgwYzAgNDEuOSAzNCA3NiA3NS45IDc2aDUwMC4zYzQxLjggMCA3NS45LTM0LjEgNzUuOS03NnYtNTgwYzAtNDEuOS0zNC03Ni03NS45LTc2aC0xLjljLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjRoMS45Yz'+
			'Y4LjMgMCAxMjMuOSA1NS42IDEyMy45IDEyNHY1ODBjMCA2OC40LTU1LjYgMTI0LTEyMy45IDEyNHoiIHAtaWQ9IjI0MjMiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJNNTExIDQzOC44SDI3OC42Yy0xMy4xIDAtMjMuOC0xMC43LTIzLjgtMjMuOHYtMC4zYzAtMTMuMSAxMC43LTIzLjggMjMuOC0yMy44SDUxMWMxMy4xIDAgMjMuOCAxMC43IDIzLjggMjMuOHYwLjNjMCAxMy4xLTEwLjcgMjMuOC0yMy44IDIzLjh6TTY1MSA2MDUuM0gyNzguNmMtMTMuMSAwLTIzLjgtMTAuNy0yMy44LTIzLjh2LTAuM2MwLTEzLjEgMTAuNy0yMy44IDIzLjgtMjMuOEg2NTFjMTMuMSAwIDIzLjggMTAu'+
			'NyAyMy44IDIzLjh2MC4zYzAgMTMuMS0xMC43IDIzLjgtMjMuOCAyMy44ek02NTEgNzcxLjhIMjc4LjZjLTEzLjEgMC0yMy44LTEwLjctMjMuOC0yMy44di0wLjNjMC0xMy4xIDEwLjctMjMuOCAyMy44LTIzLjhINjUxYzEzLjEgMCAyMy44IDEwLjcgMjMuOCAyMy44djAuM2MwIDEzLjEtMTAuNyAyMy44LTIzLjggMjMuOHoiIHAtaWQ9IjI0MjQiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48L3N2Zz4=';
		me._ht_image_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_image_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.5,sy:1.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._ht_image_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image.appendChild(me._ht_image_image);
		el=me._hotspotring=document.createElement('div');
		el.ggId="HotspotRing";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #cfb69f;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspotring.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspotring.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(player.getVariableValue('ht_ani') == true)
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._hotspotring.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._hotspotring.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._hotspotring.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._hotspotring.ggCurrentLogicStateScaling == 0) {
					me._hotspotring.ggParameter.sx = 1.2;
					me._hotspotring.ggParameter.sy = 1.2;
					me._hotspotring.style[domTransform]=parameterToTransform(me._hotspotring.ggParameter);
				}
				else {
					me._hotspotring.ggParameter.sx = 1;
					me._hotspotring.ggParameter.sy = 1;
					me._hotspotring.style[domTransform]=parameterToTransform(me._hotspotring.ggParameter);
				}
			}
		}
		me._hotspotring.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(player.getVariableValue('ht_ani') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspotring.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspotring.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspotring.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._hotspotring.ggCurrentLogicStateAlpha == 0) {
					me._hotspotring.style.visibility="hidden";
					me._hotspotring.style.opacity=0;
				}
				else {
					me._hotspotring.style.visibility=me._hotspotring.ggVisible?'inherit':'hidden';
					me._hotspotring.style.opacity=1;
				}
			}
		}
		me._hotspotring.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image.appendChild(me._hotspotring);
		me.__div = me._ht_image;
	};
	function SkinHotspotClass_end(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._end=document.createElement('div');
		el.ggId="end";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._end.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._end.onclick=function (e) {
			player.setVariableValue('end', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._end.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._end.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._end.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._end.ggUpdatePosition=function (useTransition) {
		}
		el=me._endimage=document.createElement('div');
		els=me._endimage__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQzMTIzOTY4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjAxLjUgMTEzLjljOS41IDAgMTguNSAzLjggMjUuNCAxMC42IDYuOCA2LjggMTAuNiAxNS45IDEwLjYgMjUuNHMtMy44IDE4LjUtMTAuNiAyNS40Yy02LjggNi44LTE1LjkgMTAuNi0yNS40IDEwLjZoLTE4MGMtOS41IDAtMTguNS0zLjgtMjUuNC0xMC42LTYuOC02LjgtMTAuNi0xNS45LTEwLjYtMjUuNCAwLTkuNSAzLjgtMTguNSAxMC42LTI1LjQgNi44LTYuOCAxNS45LTEwLjYgMjUuNC0xMC42aDE4MG0wLTQ4aC0xODBjLTQ2LjIgMC04NCAzNy44LTg0IDg0czM3LjggODQgODQgODRoMTgwYzQ2LjIgMCA4NC0zNy44IDg0'+
			'LTg0cy0zNy44LTg0LTg0LTg0eiIgcC1pZD0iMjQyMiIgZmlsbD0iI2YzZDViOSI+PC9wYXRoPjxwYXRoIGQ9Ik03NjEuNiA5NTkuNUgyNjEuM2MtNjguMyAwLTEyMy45LTU1LjYtMTIzLjktMTI0di01ODBjMC02OC40IDU1LjYtMTI0IDEyMy45LTEyNGgyYzEzLjMgMCAyNCAxMC43IDI0IDI0cy0xMC43IDI0LTI0IDI0aC0yYy00MS44IDAtNzUuOSAzNC4xLTc1LjkgNzZ2NTgwYzAgNDEuOSAzNCA3NiA3NS45IDc2aDUwMC4zYzQxLjggMCA3NS45LTM0LjEgNzUuOS03NnYtNTgwYzAtNDEuOS0zNC03Ni03NS45LTc2aC0xLjljLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjRoMS45Yz'+
			'Y4LjMgMCAxMjMuOSA1NS42IDEyMy45IDEyNHY1ODBjMCA2OC40LTU1LjYgMTI0LTEyMy45IDEyNHoiIHAtaWQ9IjI0MjMiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJNNTExIDQzOC44SDI3OC42Yy0xMy4xIDAtMjMuOC0xMC43LTIzLjgtMjMuOHYtMC4zYzAtMTMuMSAxMC43LTIzLjggMjMuOC0yMy44SDUxMWMxMy4xIDAgMjMuOCAxMC43IDIzLjggMjMuOHYwLjNjMCAxMy4xLTEwLjcgMjMuOC0yMy44IDIzLjh6TTY1MSA2MDUuM0gyNzguNmMtMTMuMSAwLTIzLjgtMTAuNy0yMy44LTIzLjh2LTAuM2MwLTEzLjEgMTAuNy0yMy44IDIzLjgtMjMuOEg2NTFjMTMuMSAwIDIzLjggMTAu'+
			'NyAyMy44IDIzLjh2MC4zYzAgMTMuMS0xMC43IDIzLjgtMjMuOCAyMy44ek02NTEgNzcxLjhIMjc4LjZjLTEzLjEgMC0yMy44LTEwLjctMjMuOC0yMy44di0wLjNjMC0xMy4xIDEwLjctMjMuOCAyMy44LTIzLjhINjUxYzEzLjEgMCAyMy44IDEwLjcgMjMuOCAyMy44djAuM2MwIDEzLjEtMTAuNyAyMy44LTIzLjggMjMuOHoiIHAtaWQ9IjI0MjQiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48L3N2Zz4=';
		me._endimage__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;endimage;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="endImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.5,sy:1.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._endimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._endimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._end.appendChild(me._endimage);
		el=me._endtext=document.createElement('div');
		els=me._endtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="EndText";
		el.ggDx=0;
		el.ggDy=36;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(113,103,62,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u51fa\u53e3";
		el.appendChild(els);
		me._endtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._endtext.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._end.appendChild(me._endtext);
		me.__div = me._end;
	};
	function SkinHotspotClass_ht_info_preface(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_preface=document.createElement('div');
		el.ggId="ht_info_preface";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_preface.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_info_preface.onclick=function (e) {
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_preface.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_preface.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info_preface']=true;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_preface.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info_preface']=false;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_preface.ontouchend=function (e) {
			me.elementMouseOver['ht_info_preface']=false;
			me._tt_information.logicBlock_visible();
		}
		me._ht_info_preface.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11";
		el.ggDx=1;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info_preface.appendChild(me._image_11);
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQyOTk0MTAyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzOTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI5LjIxNiAwIDAgMjI5LjIxNiAwIDUxMmMwIDI4Mi43NjggMjI5LjIxNiA1MTIgNTEyIDUxMiAyODIuNzUyIDAgNTEyLTIyOS4yMzIgNTEyLTUxMkMxMDI0IDIyOS4yMTYgNzk0Ljc1MiAwIDUxMiAwek01MTIgOTkyQzI0Ni44OTYgOTkyIDMyIDc3Ny4wODggMzIgNTEyIDMyIDI0Ni44OTYgMjQ2Ljg5NiAzMiA1MTIgMzJjMjY1LjA1NiAwIDQ4MCAyMTQuODk2IDQ4MCA0ODBDOTkyIDc3Ny4wODggNzc3LjA1NiA5OTIgNTEyIDk5MnoiIHAtaWQ9IjMzOTYiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJN'+
			'Nzk5LjU2OCA3NjAuOTI4bC0xMzIuMDE2LTEzMi4wMTZjMzkuODI0LTQ1LjEyIDY0LjIwOC0xMDQuMjQgNjQuMjA4LTE2OS4xNTIgMC0xNDEuMzc2LTExNC42MjQtMjU2LTI1Ni0yNTZzLTI1NiAxMTQuNjI0LTI1NiAyNTYgMTE0LjYyNCAyNTYgMjU2IDI1NmM2NC45MjggMCAxMjQuMDMyLTI0LjM2OCAxNjkuMTUyLTY0LjIwOGwxMzIuMDE2IDEzMi4wMTZjNi4yNzIgNi4yNTYgMTYuMzY4IDYuMjU2IDIyLjY0IDBDODA1LjgwOCA3NzcuMjk2IDgwNS44MDggNzY3LjE4NCA3OTkuNTY4IDc2MC45Mjh6TTQ3NS43NDQgNjgzLjc0NGMtMTIzLjcxMiAwLTIyNC0xMDAuMjg4LTIyNC0yMjRzMTAwLjI4OC'+
			'0yMjQgMjI0LTIyNGMxMjMuNjk2IDAgMjI0IDEwMC4yODggMjI0IDIyNFM1OTkuNDU2IDY4My43NDQgNDc1Ljc0NCA2ODMuNzQ0eiIgcC1pZD0iMzM5NyIgZmlsbD0iI2YzZDViOSI+PC9wYXRoPjwvc3ZnPg==';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_info_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5NzQyOTk0MTAyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzOTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIH'+
			'R5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI5LjIxNiAwIDAgMjI5LjIxNiAwIDUxMmMwIDI4Mi43NjggMjI5LjIxNiA1MTIgNTEyIDUxMiAyODIuNzUyIDAgNTEyLTIyOS4yMzIgNTEyLTUxMkMxMDI0IDIyOS4yMTYgNzk0Ljc1MiAwIDUxMiAwek01MTIgOTkyQzI0Ni44OTYgOTkyIDMyIDc3Ny4wODggMzIgNTEyIDMyIDI0Ni44OTYgMjQ2Ljg5NiAzMiA1MTIgMzJjMjY1LjA1NiAwIDQ4MCAyMTQuODk2IDQ4MCA0ODBDOTkyIDc3Ny4wODggNzc3LjA1NiA5OTIgNTEyIDk5MnoiIHAtaWQ9IjMzOTYiIGZpbGw9IiNmM2Q1YjkiPjwvcGF0aD48cGF0aCBkPSJN'+
			'Nzk5LjU2OCA3NjAuOTI4bC0xMzIuMDE2LTEzMi4wMTZjMzkuODI0LTQ1LjEyIDY0LjIwOC0xMDQuMjQgNjQuMjA4LTE2OS4xNTIgMC0xNDEuMzc2LTExNC42MjQtMjU2LTI1Ni0yNTZzLTI1NiAxMTQuNjI0LTI1NiAyNTYgMTE0LjYyNCAyNTYgMjU2IDI1NmM2NC45MjggMCAxMjQuMDMyLTI0LjM2OCAxNjkuMTUyLTY0LjIwOGwxMzIuMDE2IDEzMi4wMTZjNi4yNzIgNi4yNTYgMTYuMzY4IDYuMjU2IDIyLjY0IDBDODA1LjgwOCA3NzcuMjk2IDgwNS44MDggNzY3LjE4NCA3OTkuNTY4IDc2MC45Mjh6TTQ3NS43NDQgNjgzLjc0NGMtMTIzLjcxMiAwLTIyNC0xMDAuMjg4LTIyNC0yMjRzMTAwLjI4OC'+
			'0yMjQgMjI0LTIyNGMxMjMuNjk2IDAgMjI0IDEwMC4yODggMjI0IDIyNFM1OTkuNDU2IDY4My43NDQgNDc1Ljc0NCA2ODMuNzQ0eiIgcC1pZD0iMzM5NyIgZmlsbD0iI2YzZDViOSI+PC9wYXRoPjwvc3ZnPg==';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_info_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
		}
		me._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_preface.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					me._tt_information.style.left='-50px';
					me._tt_information.style.top='-47px';
				}
				else {
					me._tt_information.style.left='-50px';
					me._tt_information.style.top='21px';
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_info_preface'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info_preface.appendChild(me._tt_information);
		me.__div = me._ht_info_preface;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_position') {
			hotspot.skinid = 'ht_position';
			hsinst = new SkinHotspotClass_ht_position(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_position_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_position_changenode();;
			me.callChildLogicBlocksHotspot_ht_position_configloaded();;
			me.callChildLogicBlocksHotspot_ht_position_mouseover();;
			me.callChildLogicBlocksHotspot_ht_position_active();;
			me.callChildLogicBlocksHotspot_ht_position_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_position_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_position_varchanged_opt_hotspot_preview();;
		} else
		if (hotspot.skinid=='ht_Image') {
			hotspot.skinid = 'ht_Image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_image_changenode();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='end') {
			hotspot.skinid = 'end';
			hsinst = new SkinHotspotClass_end(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
			hotspot.skinid = 'ht_info_preface';
			hsinst = new SkinHotspotClass_ht_info_preface(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_preface_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_preface_mouseover();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_position']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_position'].length; i++) {
				hotspotTemplates['ht_position'][i] = null;
			}
		}
		if(hotspotTemplates['ht_Image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_Image'].length; i++) {
				hotspotTemplates['ht_Image'][i] = null;
			}
		}
		if(hotspotTemplates['end']) {
			var i;
			for(i = 0; i < hotspotTemplates['end'].length; i++) {
				hotspotTemplates['end'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info_preface']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_preface'].length; i++) {
				hotspotTemplates['ht_info_preface'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 172px; height: 120px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.83,sy:0.78 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 144px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 224px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__div.appendChild(me._thumbnail_nodeimage);
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true) || 
				(me._checkmark_tick.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._checkmark_tick);
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 10px solid rgba(0,0,0,0.862745);';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(0,0,0,0.470588)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(0,0,0,0.862745)";
				}
			}
		}
		me._thumbnail_active.onclick=function (e) {
			if (
				(
					(me._thumbnail_active.ggIsActive() == false)
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 91px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 91px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['thumbnail_active'] == true) && 
				(me.ggUserdata.title != "") && 
				(player.getVariableValue('opt_thumbnail_menu_tooltip') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					me._thumbnail_title.style.visibility="hidden";
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		me.__div.appendChild(me._thumbnail_active);
	};
	function SkinCloner_thumbnail_cloner_mobile_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 172px; height: 120px; visibility: inherit; overflow: hidden;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage_mobile=document.createElement('div');
		els=me._thumbnail_nodeimage_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_mobile_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage_mobile;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.83,sy:0.78 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 135px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage_mobile.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage_mobile);
		el=me._checkmark_tick_mobile=document.createElement('div');
		els=me._checkmark_tick_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgWw0KCTwhRU5USVRZIG5zX2Zsb3dzICJodHRwOi8vbnMuYWRvYmUuY29tL0Zsb3dzLzEuMC8iPg0KCTwhRU5USVRZIG5zX2V4dGVuZCAiaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbn'+
			'NpYmlsaXR5LzEuMC8iPg0KCTwhRU5USVRZIG5zX2FpICJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iPg0KCTwhRU5USVRZIG5zX2dyYXBocyAiaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+DQpdPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9IiZuc19leHRlbmQ7IiB4bWxuczppPSImbnNfYWk7IiB4bWxuczpncmFwaD0iJm5zX2dyYXBoczsiDQoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRv'+
			'YmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iDQoJIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMzcyMiAtMjYwNiAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iTGF5ZXJfMSI+DQo8L2c+DQo8ZyBpZD0iRWJlbmVfMSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC'+
			'43ODdsLTIuMjkxLTIuMjQzDQoJCQkJYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDJjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5DQoJCQkJYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4'+
			'Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4DQoJCQkJYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMw0KCQkJCWwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJCTxnIG9wYWNpdHk9IjAuNCIgIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiPg0KCQkJDQoJCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW'+
			'5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiAgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIGQ9Ig0KCQkJCU0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5'+
			'NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQkNCgkJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiICBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgZD0iDQoJCQkJTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC'+
			'42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMNCgkJCQljLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAu'+
			'Mzc5LDAuOTMsMC4zNzkNCgkJCQljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPg0KCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgNCgkJCQljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMC'+
			'wxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzDQoJCQkJbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYNCgkJCQljLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyDQoJCQkJYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2'+
			'NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNw0KCQkJCUMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNw0KCQkJCWgtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni'+
			'0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOQ0KCQkJCWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';
		me._checkmark_tick_mobile__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick_mobile;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(player.nodeVisited(me._checkmark_tick_mobile.ggElementNodeId()) == true) || 
				(me._checkmark_tick_mobile.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick_mobile.style[domTransition]='';
				if (me._checkmark_tick_mobile.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick_mobile.style.visibility=(Number(me._checkmark_tick_mobile.style.opacity)>0||!me._checkmark_tick_mobile.style.opacity)?'inherit':'hidden';
					me._checkmark_tick_mobile.ggVisible=true;
				}
				else {
					me._checkmark_tick_mobile.style.visibility="hidden";
					me._checkmark_tick_mobile.ggVisible=false;
				}
			}
		}
		me._checkmark_tick_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._checkmark_tick_mobile);
		el=me._thumbnail_active_mobile=document.createElement('div');
		el.ggId="thumbnail_active_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border : 10px solid rgba(80,71,66,0.882353);';
		hs+='cursor : pointer;';
		hs+='height : 85px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active_mobile.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active_mobile.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active_mobile'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active_mobile.style[domTransition]='border-color 0s';
				if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active_mobile.style.borderColor="rgba(0,0,0,0.470588)";
				}
				else if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active_mobile.style.borderColor="rgba(0,0,0,0.470588)";
				}
				else {
					me._thumbnail_active_mobile.style.borderColor="rgba(80,71,66,0.882353)";
				}
			}
		}
		me._thumbnail_active_mobile.onclick=function (e) {
			if (
				(
					(me._thumbnail_active_mobile.ggIsActive() == false)
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._thumbnail_active_mobile.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active_mobile']=true;
			me._thumbnail_title_mobile.logicBlock_alpha();
			me._thumbnail_active_mobile.logicBlock_bordercolor();
		}
		me._thumbnail_active_mobile.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active_mobile']=false;
			me._thumbnail_title_mobile.logicBlock_alpha();
			me._thumbnail_active_mobile.logicBlock_bordercolor();
		}
		me._thumbnail_active_mobile.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active_mobile']=false;
			me._thumbnail_title_mobile.logicBlock_alpha();
			me._thumbnail_active_mobile.logicBlock_bordercolor();
		}
		me._thumbnail_active_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title_mobile=document.createElement('div');
		els=me._thumbnail_title_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 91px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 91px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['thumbnail_active_mobile'] == true) && 
				(me.ggUserdata.title != "") && 
				(player.getVariableValue('opt_thumbnail_menu_tooltip') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title_mobile.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_title_mobile.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title_mobile.style.visibility=me._thumbnail_title_mobile.ggVisible?'inherit':'hidden';
					me._thumbnail_title_mobile.style.opacity=1;
				}
				else {
					me._thumbnail_title_mobile.style.visibility="hidden";
					me._thumbnail_title_mobile.style.opacity=0;
				}
			}
		}
		me._thumbnail_title_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_active_mobile.appendChild(me._thumbnail_title_mobile);
		me.__div.appendChild(me._thumbnail_active_mobile);
	};
	function SkinCloner_cloner_1_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 504px; height: 94.5px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.onclick=function (e) {
			if (
				(
					(me._rectangle_4.ggIsActive() == false)
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(248,219,189,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 11px 1px 11px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<span style=\"font-family:'\u534e\u6587\u884c\u6977';display:inline-block;max-width:220px\" width=\"100%\">"+me.ggUserdata.title+"<\/span>";
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_4.appendChild(me._text_4);
		me.__div.appendChild(me._rectangle_4);
	};
	me.addSkin();
	me._rectangle_3.logicBlock_alpha();
	me._svg_20.logicBlock_visible();
	me._image_90.logicBlock_position();
	me._image_80.logicBlock_position();
	me._down1.logicBlock_visible();
	me._up1.logicBlock_visible();
	me._roomdropdowncontainer0.logicBlock_visible();
	me._map_pin_active16.logicBlock_alpha();
	me._map_pin_normal16.logicBlock_alpha();
	me._map_pin_active15.logicBlock_alpha();
	me._map_pin_normal15.logicBlock_alpha();
	me._map_pin_active14.logicBlock_alpha();
	me._map_pin_normal14.logicBlock_alpha();
	me._map_pin_active13.logicBlock_alpha();
	me._map_pin_normal13.logicBlock_alpha();
	me._map_pin_active12.logicBlock_alpha();
	me._map_pin_normal12.logicBlock_alpha();
	me._map_pin_active11.logicBlock_alpha();
	me._map_pin_normal11.logicBlock_alpha();
	me._map_pin_active10.logicBlock_alpha();
	me._map_pin_normal10.logicBlock_alpha();
	me._map_pin_active9.logicBlock_alpha();
	me._map_pin_normal9.logicBlock_alpha();
	me._map_pin_active8.logicBlock_alpha();
	me._map_pin_normal8.logicBlock_alpha();
	me._down0.logicBlock_visible();
	me._up0.logicBlock_visible();
	me._roomdropdowncontainer.logicBlock_visible();
	me._map_pin_active7.logicBlock_alpha();
	me._map_pin_normal7.logicBlock_alpha();
	me._map_pin_active6.logicBlock_alpha();
	me._map_pin_normal6.logicBlock_alpha();
	me._map_pin_active5.logicBlock_alpha();
	me._map_pin_normal5.logicBlock_alpha();
	me._map_pin_active4.logicBlock_alpha();
	me._map_pin_normal4.logicBlock_alpha();
	me._map_pin_active3.logicBlock_alpha();
	me._map_pin_normal3.logicBlock_alpha();
	me._map_pin_active2.logicBlock_alpha();
	me._map_pin_normal2.logicBlock_alpha();
	me._map_pin_active1.logicBlock_alpha();
	me._map_pin_normal1.logicBlock_alpha();
	me._map_pin_active0.logicBlock_alpha();
	me._map_pin_normal0.logicBlock_alpha();
	me._map_pin_active.logicBlock_alpha();
	me._map_pin_normal.logicBlock_alpha();
	me._tt_thumbnail_open.logicBlock_text();
	me._thumbnail_menu.logicBlock_alpha();
	me.__9.logicBlock_visible();
	me._thumbnail_menu_mobile.logicBlock_alpha();
	me._svg_2.logicBlock_visible();
	me._image_9.logicBlock_position();
	me._image_8.logicBlock_position();
	me._screentint_info0.logicBlock_visible();
	me._popup_image.logicBlock_visible();
	me._mark.logicBlock_visible();
	me._screentint_info.logicBlock_visible();
	me._information.logicBlock_visible();
	me.__14.logicBlock_visible();
	me.__6.logicBlock_visible();
	me._tt_thumbnail_open.logicBlock_position();
	me._tt_projection.logicBlock_position();
	me._thumbnail_menu.logicBlock_position();
	me._thumbnail_menu_mobile.logicBlock_position();
	me._popup_image.logicBlock_size();
	me._info_popup_close_1.logicBlock_position();
	me._iframeimage.logicBlock_size();
	me._imagetext.logicBlock_position();
	me._imagetext.logicBlock_size();
	me._tt_projection.logicBlock_text();
	player.addListener('changenode', function(args) { me._rectangle_3.logicBlock_alpha();me._svg_20.logicBlock_visible();me._image_90.logicBlock_position();me._image_80.logicBlock_position();me._down1.logicBlock_visible();me._up1.logicBlock_visible();me._roomdropdowncontainer0.logicBlock_visible();me._map_pin_active16.logicBlock_alpha();me._map_pin_normal16.logicBlock_alpha();me._map_pin_active15.logicBlock_alpha();me._map_pin_normal15.logicBlock_alpha();me._map_pin_active14.logicBlock_alpha();me._map_pin_normal14.logicBlock_alpha();me._map_pin_active13.logicBlock_alpha();me._map_pin_normal13.logicBlock_alpha();me._map_pin_active12.logicBlock_alpha();me._map_pin_normal12.logicBlock_alpha();me._map_pin_active11.logicBlock_alpha();me._map_pin_normal11.logicBlock_alpha();me._map_pin_active10.logicBlock_alpha();me._map_pin_normal10.logicBlock_alpha();me._map_pin_active9.logicBlock_alpha();me._map_pin_normal9.logicBlock_alpha();me._map_pin_active8.logicBlock_alpha();me._map_pin_normal8.logicBlock_alpha();me._down0.logicBlock_visible();me._up0.logicBlock_visible();me._roomdropdowncontainer.logicBlock_visible();me._map_pin_active7.logicBlock_alpha();me._map_pin_normal7.logicBlock_alpha();me._map_pin_active6.logicBlock_alpha();me._map_pin_normal6.logicBlock_alpha();me._map_pin_active5.logicBlock_alpha();me._map_pin_normal5.logicBlock_alpha();me._map_pin_active4.logicBlock_alpha();me._map_pin_normal4.logicBlock_alpha();me._map_pin_active3.logicBlock_alpha();me._map_pin_normal3.logicBlock_alpha();me._map_pin_active2.logicBlock_alpha();me._map_pin_normal2.logicBlock_alpha();me._map_pin_active1.logicBlock_alpha();me._map_pin_normal1.logicBlock_alpha();me._map_pin_active0.logicBlock_alpha();me._map_pin_normal0.logicBlock_alpha();me._map_pin_active.logicBlock_alpha();me._map_pin_normal.logicBlock_alpha();me._tt_thumbnail_open.logicBlock_text();me._thumbnail_menu.logicBlock_alpha();me.__9.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_alpha();me._svg_2.logicBlock_visible();me._image_9.logicBlock_position();me._image_8.logicBlock_position();me._screentint_info0.logicBlock_visible();me._popup_image.logicBlock_visible();me._mark.logicBlock_visible();me._screentint_info.logicBlock_visible();me._information.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me.__14.logicBlock_visible();me.__6.logicBlock_visible();me._tt_thumbnail_open.logicBlock_position();me._tt_projection.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._thumbnail_menu_mobile.logicBlock_position();me._popup_image.logicBlock_size();me._info_popup_close_1.logicBlock_position();me._iframeimage.logicBlock_size();me._imagetext.logicBlock_position();me._imagetext.logicBlock_size(); });
	player.addListener('projectionchanged', function(args) { me._tt_projection.logicBlock_text(); });
	player.addListener('varchanged_vis_thumbnail_menu', function(args) { me._rectangle_3.logicBlock_alpha();me._tt_thumbnail_open.logicBlock_text();me._thumbnail_menu.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('varchanged_OpenState', function(args) { me._svg_20.logicBlock_visible();me._image_90.logicBlock_position();me._image_80.logicBlock_position();me.__9.logicBlock_visible();me._svg_2.logicBlock_visible();me._image_9.logicBlock_position();me._image_8.logicBlock_position(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._screentint_info.logicBlock_visible();me._information.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup_3', function(args) { me._screentint_info0.logicBlock_visible();me._popup_image.logicBlock_visible(); });
	player.addListener('varchanged_end', function(args) { me._mark.logicBlock_visible(); });
	player.addListener('varchanged_vis_loc_text', function(args) { me._down1.logicBlock_visible();me._up1.logicBlock_visible();me._roomdropdowncontainer0.logicBlock_visible();me._down0.logicBlock_visible();me._up0.logicBlock_visible();me._roomdropdowncontainer.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changenode();me._thumbnail_cloner_mobile.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover();me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover();me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_active();me._thumbnail_cloner_mobile.callChildLogicBlocks_active(); });
	player.addListener('varchanged_opt_thumbnail_menu_tooltip', function(args) { me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip();me._thumbnail_cloner_mobile.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip(); });
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_ht_position_sizechanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_position_changenode();me.callChildLogicBlocksHotspot_ht_image_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_position_configloaded();me.callChildLogicBlocksHotspot_ht_info_preface_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_position_mouseover();me.callChildLogicBlocksHotspot_ht_info_preface_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_position_active(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me.callChildLogicBlocksHotspot_ht_position_varchanged_vis_image_popup(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_ht_position_varchanged_vis_info_popup(); });
	player.addListener('varchanged_ht_ani', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_ht_ani(); });
	player.addListener('varchanged_opt_hotspot_preview', function(args) { me.callChildLogicBlocksHotspot_ht_position_varchanged_opt_hotspot_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};