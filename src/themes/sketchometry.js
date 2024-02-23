/*
    sketchometry v1.99.31

    Copyright 2011-2023
        Alfred Wassermann
        Carsten Miller
        Andreas Walter
        Matthias Ehmann
        Michael Gerhaeuser
        Heiko Vogel

    This file is part of sketchometry.

    sketchometry is free in use and not licensed yet.

    In touch with geometry!
    You draw with your finger or the mouse. sketchometry then converts your
    sketches into geometrical constructions that can be dragged and manipulated.
    sketchometry is free of charge and can be used both at school and at home.
    sketchometry can be used WITHOUT ANY WARRANTY.

    For more infos see:
    https://sketchometry.org/
*/

!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SketchoStyles=e():o.SketchoStyles=e()}("undefined"!=typeof self?self:this,(function(){return function(){"use strict";var o={};let e={sketchometry:{}},r={};JXG.extend(r,{red:JXG.paletteWong.red,orange:JXG.paletteWong.orange,yellow:JXG.paletteWong.yellow,green:JXG.paletteWong.green,skyblue:JXG.paletteWong.skyblue,blue:JXG.paletteWong.blue,purple:JXG.paletteWong.purple,black:JXG.paletteWong.black,darkgrey:"#666666",grey:"#999999",lightgrey:"#CCCCCC",white:JXG.paletteWong.white,transparent:"transparent",_bootstrap:{secondary_dark:"#bed2e0",outer:"#cfd8df",outer_active:"#92a7b6"}}),JXG.extend(e,{opacityLevel:.5,trunclen:2,board:{minimizeReflow:"svg",keepaspectratio:!0,pan:{needShift:!0,needTwoFingers:!0,enabled:!0},zoom:{enabled:!0,wheel:!0,needshift:!0,min:.01,pinchHorizontal:!1,pinchVertical:!1},selection:{enabled:!1},showNavigation:!1,showCopyright:!1,showInfobox:!1},elements:{transitionDuration:170,snapToPoints:!1,snapToGrid:!1},grid:{snapToPoints:!1,snapToGrid:!1},precision:{touchMax:1/0}}),delete JXG.Options.shortcuts.strokeWidth;const t={size:6,layer:10,snapX:-1,snapY:-1,strokeWidth:0,strokeColor:r.black,fillColor:r.black,fillOpacity:1,highlightStrokeWidth:5,highlightStrokeColor:r.black,highlightFillColor:r.black,highlightFillOpacity:1,snapToPoints:!1,snapsizeX:.5,snapsizeY:.5,attractorDistance:.5,isMergedPoint:!1,isPartOfSector:!1,isPartOfSlopetriangle:!1,isPartOfTangent:!1,isPartOfRegpol:!1,isPartOfVector:!1,isPartOfConstantSegment:!1,traceAttributes:{size:6*.7,opacity:.3}};e.point=JXG.deepCopy(t,{strokeColor:r.red,fillColor:r.red,highlightStrokeColor:r.red,highlightFillColor:r.red}),e.glider=JXG.deepCopy(t,{strokeColor:r.orange,fillColor:r.orange,highlightStrokeColor:r.orange,highlightFillColor:r.orange}),e.intersection=JXG.deepCopy(t,{layer:9,strokeColor:r.darkgrey,fillColor:r.darkgrey,highlightStrokeColor:r.darkgrey,highlightFillColor:r.darkgrey}),e.midpoint=JXG.deepCopy(t,{strokeColor:r.grey,fillColor:r.grey,highlightStrokeColor:r.grey,highlightFillColor:r.grey});const l={layer:10,fontSize:18,strokeColor:r.black,highlightStrokeColor:r.black,strokeOpacity:1,highlightStrokeOpacity:.5};e.text=JXG.deepCopy(l,{digits:2}),e.label=JXG.deepCopy(l,{offset:[12,12],autoPosition:!0}),e.measurement=JXG.deepCopy(l,{cssStyle:"",strokeColor:r.green,highlightStrokeColor:r.green});const i={lineCap:"round",dashScale:!0,margin:2.5,strokeWidth:2.5,strokeColor:r.blue,strokeOpacity:1,highlightStrokeColor:r.blue,highlightStrokeOpacity:1,touchFirstPoint:!0,touchLastPoint:!0,traceAttributes:{opacity:.3}};e.line=JXG.deepCopy(i,{scalable:!1}),e.segment=JXG.deepCopy(i,{label:JXG.deepCopy(l,{position:"bot",offsets:[0,-12]}),scalable:!1,isConstantSegment:!1}),e.parallel=JXG.deepCopy(i,{scalable:!1,strokeColor:r.darkgrey,highlightStrokeColor:r.darkgrey}),e.parallelpoint=JXG.deepCopy(t,{strokeColor:r.grey,fillColor:r.grey,highlightStrokeColor:r.grey,highlightFillColor:r.grey}),e.normal=JXG.deepCopy(i,{scalable:!1,strokeColor:r.darkgrey,highlightStrokeColor:r.darkgrey}),e.perpendicularsegment=JXG.deepCopy(i,{strokeColor:r.darkgrey,highlightStrokeColor:r.darkgrey,point:JXG.deepCopy(t,{visible:!0,strokeColor:r.grey,fillColor:r.grey,highlightStrokeColor:r.grey,highlightFillColor:r.grey})}),e.bisector=JXG.deepCopy(i,{scalable:!1,strokeColor:r.darkgrey,highlightStrokeColor:r.darkgrey}),e.tangent=JXG.deepCopy(i,{scalable:!1,strokeColor:r.darkgrey,highlightStrokeColor:r.darkgrey}),e.arrow=JXG.deepCopy(i,{scalable:!1,strokeColor:r.purple,highlightStrokeColor:r.purple,firstArrow:!1,lastArrow:{type:6,size:10},label:{position:"bot"}}),e.arrowparallel=JXG.deepCopy(e.arrow,{fixed:!0,strokeColor:r.grey,highlightStrokeColor:r.grey,point:JXG.deepCopy(t,{visible:!0,strokeColor:r.grey,fillColor:r.grey,highlightStrokeColor:r.grey,highlightFillColor:r.grey})}),e.axis=JXG.deepCopy(i,{visible:!1,layer:2,highlight:!1,withLabel:!0,margin:-2.5,strokeWidth:1.5,strokeColor:r.black,ticks:{visible:!1,withLabel:!0,label:JXG.deepCopy(l,{parse:!1,display:"internal"}),drawLabels:!0,drawZero:!1,majorHeight:8,minorHeight:6,minorTicks:0,tickEndings:[1,1],insertTicks:!0,minTicksDistance:.5,layer:1,gridColor:r.lightgrey,gridOpacity:1,gridWidth:1,tickColor:"auto",tickOpacity:"auto",tickWidth:"auto"},label:JXG.deepCopy(l,{position:"urt",offset:[10,10],display:"internal"})}),e.sketchometry.axisX={label:{offset:[0,-20],cssStyle:"transform: translateX(-50%); transform-box: fill-box; font-weight: 600;",fontSize:l.fontSize+2},ticks:{label:{position:"bot",offset:[0,-25],cssStyle:"transform: translateX(-50%); transform-box: fill-box;"}}},e.sketchometry.axisY={label:{offset:[-10,0],cssStyle:"transform: translateX(-100%); transform-box: fill-box; font-weight: 600;",fontSize:l.fontSize+2},ticks:{label:{position:"lrt",offset:[-15,0],cssStyle:"transform: translateX(-100%); transform-box: fill-box;"}}};const h={fillColor:r.yellow,fillOpacity:.5,highlightFillColor:r.yellow,highlightFillOpacity:.25},a=JXG.deepCopy(i,h);e.circle=JXG.deepCopy(a,{fillColor:"none",highlightFillColor:"none"}),e.sector=JXG.deepCopy(a,{fixed:!1,strokeWidth:0,highlightStrokeWidth:0,arc:JXG.deepCopy(i,{visible:!0,fillColor:"none"})}),e.polygon=JXG.deepCopy(a,{highlightByStrokeWidth:!0,scalable:!1,rotatable:!0,borders:JXG.deepCopy(i,{fixed:!0})}),e.regularpolygon=JXG.deepCopy(a,{highlightByStrokeWidth:!0,scalable:!1,rotatable:!0,fillColor:r.skyblue,highlightFillColor:r.skyblue,borders:JXG.deepCopy(i,{fixed:!0}),vertices:JXG.deepCopy(t,{layer:8,strokeColor:r.grey,fillColor:r.grey,highlightStrokeColor:r.grey,highlightFillColor:r.grey})}),e.parallelogram=JXG.deepCopy(a,{scalable:!1,rotatable:!1,fillColor:r.skyblue,highlightFillColor:r.skyblue,borders:JXG.deepCopy(i,{fixed:!0})}),e.curve=JXG.deepCopy(i,{strokeColor:r.black,highlightStrokeColor:r.black}),e.angle=JXG.deepCopy(a,{fixed:!0,radius:"auto",orthotype:"sectordot",isConstant:!1,valueConstant:"",unitConstant:"",fillColor:r.lightgrey,highlightFillColor:r.lightgrey,strokeWidth:0,dot:{size:2.5,strokeWidth:0,strokeColor:r.black,fillColor:r.black,fillOpacity:1,highlightStrokeWidth:0,highlightStrokeColor:r.black,highlightFillColor:r.black,highlightFillOpacity:1},arc:{visible:!0,strokeColor:r.black,highlightStrokeColor:r.black,strokeWidth:1,highlightStrokeWidth:2},label:JXG.deepCopy(l,{})}),e.reflexangle={fillColor:r.darkgrey,highlightFillColor:r.darkgrey},e.nonreflexangle={fillColor:r.darkgrey,highlightFillColor:r.darkgrey},e.functiongraph=JXG.deepCopy(i,{strokeColor:r.green,highlightStrokeColor:r.green,doAdvancedPlot:!0,doAdvancedPlotOld:!1,plotVersion:2}),e.slider=JXG.deepCopy(t,{size:10,moveOnUp:!1,layer:20,strokeColor:i.strokeColor,fillColor:i.strokeColor,highlightStrokeColor:i.highlightStrokeColor,highlightFillColor:i.highlightStrokeColor,withTicks:!1,label:JXG.deepCopy(l,{priv:!0}),baseline:JXG.deepCopy(i,{layer:15,fixed:!1,priv:!0,needsRegularUpdate:!0,strokeWidth:8,strokeColor:r._bootstrap.outer,highlightStrokeWidth:8,highlightStrokeColor:r._bootstrap.outer}),point2:JXG.deepCopy(t,{layer:20,fixed:!1,frozen:!0,priv:!0,visible:!0,needsRegularUpdate:!0,snapToGrid:!0,size:3,strokeColor:r._bootstrap.outer,fillColor:r._bootstrap.outer,highlightStrokeColor:r._bootstrap.outer,highlightFillColor:r._bootstrap.outer}),highline:JXG.deepCopy(i,{layer:15,fixed:!1,priv:!0,needsRegularUpdate:!0,strokeWidth:8,strokeColor:r._bootstrap.outer_active,highlightStrokeWidth:8,highlightStrokeColor:r._bootstrap.outer_active}),point1:JXG.deepCopy(t,{layer:20,fixed:!1,frozen:!0,priv:!0,visible:!0,needsRegularUpdate:!0,snapToGrid:!0,size:3,strokeColor:r._bootstrap.outer_active,fillColor:r._bootstrap.outer_active,highlightStrokeColor:r._bootstrap.outer_active,highlightFillColor:r._bootstrap.outer_active}),animationSpeed:0}),e.slopetriangle=JXG.deepCopy(a,{basepoint:JXG.deepCopy(t,{visible:!1}),glider:JXG.deepCopy(t,{visible:!0,size:3,strokeColor:r.orange,fillColor:r.orange,highlightStrokeColor:r.orange,highlightFillColor:r.orange}),toppoint:JXG.deepCopy(t,{visible:!0,strokeColor:r.grey,fillColor:r.grey,size:3,highlightStrokeColor:r.grey,highlightFillColor:r.grey}),baseline:{visible:!1},tangent:{visible:!1,priv:!0},label:JXG.deepCopy(l,{}),fillColor:r.lightgrey,highlightFillColor:r.lightgrey,borders:JXG.deepCopy(i,{fixed:!0,lastArrow:{type:1,size:4},touchLastPoint:!0,names:["","",""],strokeColor:r.grey,highlightStrokeColor:r.grey})}),e.tapemeasure={strokeColor:r.black,strokeWidth:2.5,highlightStrokeColor:r.black,strokeOpacity:.7,point1:{snapToPoints:!0,attractorUnit:"screen",attractorDistance:20},point2:{snapToPoints:!0,attractorUnit:"screen",attractorDistance:20},ticks:{strokeOpacity:.7}},JXG.extend(e.sketchometry,{boardAttributes:{snapToGridGlobal:!1,snapToPointsGlobal:!1,background:{color:r.transparent,opacity:.25}},highlightStrokeWidthOperation:"+ 2.5",traceSizeOperation:"* 0.7",highlighter:{color:r.black,size:18,opacity:.2},hiddenPreview:{point:{fillOpacity:.33,strokeOpacity:.33,highlightFillOpacity:.33,highlightStrokeOpacity:.33},line:{strokeOpacity:.33,highlightStrokeOpacity:.33},areaFilled:{fillOpacity:.33,strokeOpacity:.33,highlightStrokeOpacity:.33},areaEmpty:{strokeOpacity:.33,highlightStrokeOpacity:.33},angle:{fillOpacity:.33,strokeOpacity:.33,highlightStrokeOpacity:.33},scribble:{strokeOpacity:.33,highlightStrokeOpacity:.33},text:{strokeOpacity:.33}},reflection:{point:JXG.deepCopy(t,{strokeColor:r.grey,fillColor:r.grey,highlightStrokeColor:r.grey,highlightFillColor:r.grey}),fill:JXG.deepCopy(h,{fillColor:r.lightgrey,highlightFillColor:r.lightgrey}),stroke:JXG.deepCopy(i,{strokeColor:r.grey,highlightStrokeColor:r.grey})},migration:{mergedPoint:{face:"o",layer:11,withLabel:!1,strokeWidth:0,strokeColor:r.white,fillColor:r.white,fillOpacity:1,size:4,visible:!0,sizeFactor:.3},point:JXG.deepCopy(t,{strokeColor:r.grey,fillColor:r.grey,highlightStrokeColor:r.grey,highlightFillColor:r.grey}),fill:JXG.deepCopy(h,{fillColor:r.lightgrey,highlightFillColor:r.lightgrey}),stroke:JXG.deepCopy(i,{strokeColor:r.grey,highlightStrokeColor:r.grey})},sectorCorner:JXG.deepCopy(t,{layer:8,strokeColor:r.grey,fillColor:r.grey,highlightStrokeColor:r.grey,highlightFillColor:r.grey}),circle3pointsCenter:JXG.deepCopy(t,{strokeColor:r.grey,fillColor:r.grey,highlightStrokeColor:r.grey,highlightFillColor:r.grey}),vectorBasepoint:JXG.deepCopy(t,{strokeColor:r.red,fillColor:r.red,highlightStrokeColor:r.red,highlightFillColor:r.red}),vectorLacepoint:JXG.deepCopy(t,{strokeColor:r.red,fillColor:r.red,highlightStrokeColor:r.red,highlightFillColor:r.red}),draftcurve:{curveType:"plot",layer:19,transitionDuration:0,priv:!0,visible:!0,strokeColor:r._bootstrap.secondary_dark,strokeWidth:14,opacity:.8},draftscribble:{curveType:"plot",layer:19,transitionDuration:0,priv:!0,visible:!0,strokeColor:r._bootstrap.secondary_dark,strokeWidth:3,opacity:.8}}),JXG.merge(JXG.Options,e),o.default=e;return o=o.default}()}));