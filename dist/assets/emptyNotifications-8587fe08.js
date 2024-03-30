import{H as c,b as e,y as x}from"./index-28d7808a.js";const w=c("notification",()=>{const n=e({}),m=e({}),o=e(!0),s=e(!1),t=e(""),l=async()=>{await x.get("/notifications/counts").then(i=>{m.value=i.data.data,s.value=!0}).catch(i=>{var a;t.value=(a=i.response)==null?void 0:a.data.message})};return{notifications:n,isLoading:o,isSuccess:s,message:t,notificationsCounts:m,getNotifications:async(i=!1,a=!1,k=1)=>{i&&(o.value=!0),await x.get("/notifications",{params:{unread:a,page:k}}).then(async r=>{n.value=r.data.data,s.value=!0,await l()}).catch(r=>{var p;t.value=(p=r.response)==null?void 0:p.data.message}).then(()=>{o.value=!1})},markAsRead:async i=>{s.value=!1,await x.put(`/notifications/${i}/mark-as-read`).then(async a=>{s.value=!0,t.value=a.data.message}).catch(a=>{var k;t.value=(k=a.response)==null?void 0:k.data.message})},markAllAsRead:async()=>{s.value=!1,await x.put("/notifications/mark-all-as-read").then(async i=>{t.value=i.data.message,s.value=!0}).catch(i=>{var a;t.value=(a=i.response)==null?void 0:a.data.message})},deleteNotification:async i=>{s.value=!1,await x.delete(`/notifications/${i}`).then(async a=>{t.value=a.data.message,s.value=!0}).catch(a=>{var k;t.value=(k=a.response)==null?void 0:k.data.message})},markAsUnread:async i=>{s.value=!1,await x.put(`/notifications/${i}/mark-as-unread`).then(async a=>{s.value=!0,t.value=a.data.message}).catch(a=>{var k;t.value=(k=a.response)==null?void 0:k.data.message})},getCounts:l}}),h="Sleeping Cat 4",y=0,d=908,f=797,u={g:"@lottiefiles/toolkit-js 0.25.4"},G=[{ty:3,nm:"Null 1",sr:1,st:0,op:240,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[50,50,0],ix:1},s:{a:0,k:[243,243,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[398,454,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:0,ix:11}},ef:[],ind:1},{ty:3,nm:"Null 10",sr:1,st:0,op:240,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[379.5,464,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:0,ix:11}},ef:[],ind:2},{ty:4,nm:"Layer 4 Outlines 7",sr:1,st:187,op:283,ip:187,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[6.83,7.826,0],ix:1},s:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[0,0,100],t:187},{s:[243,243,100],t:282}],ix:6},sk:{a:0,k:0},p:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[234.215,-141.867,0],t:187,ti:[-14.417,18.75,0],to:[14.417,-18.75,0]},{s:[320.715,-254.367,0],t:282}],ix:2},r:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[0],t:187},{o:{x:.333,y:0},i:{x:.667,y:1},s:[-23],t:211},{s:[0],t:235}],ix:10},sa:{a:0,k:0},o:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[100],t:276},{s:[0],t:282}],ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 1",ix:1,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!0,i:[[-.132,.114],[0,0],[0,0],[.187,.22],[-.046,.305],[-.245,.165],[-.423,-.064],[0,0],[.141,-.942],[.209,-.243],[.601,-.522],[0,0],[0,0],[-.186,-.209],[.048,-.318],[.242,-.161],[.43,.064],[0,0],[.264,.317],[-.069,.455],[-.07,.124],[-.101,.103],[-.176,.156]],o:[[0,0],[0,0],[-.424,-.064],[-.187,-.219],[.047,-.319],[.245,-.164],[0,0],[1.011,.152],[-.068,.45],[-.208,.243],[0,0],[0,0],[.431,.065],[.185,.21],[-.049,.331],[-.241,.162],[0,0],[-.605,-.091],[-.265,-.317],[.023,-.156],[.07,-.123],[.102,-.103],[.177,-.155]],v:[[-5.236,2.854],[3.073,-4.518],[-2.98,-5.426],[-3.897,-5.85],[-4.108,-6.637],[-3.67,-7.361],[-2.667,-7.512],[5.135,-6.342],[6.439,-4.702],[6.025,-3.663],[4.81,-2.516],[-2.953,4.335],[4.307,5.424],[5.231,5.835],[5.437,6.628],[5.001,7.365],[3.994,7.512],[-4.912,6.174],[-6.216,5.563],[-6.511,4.404],[-6.372,3.984],[-6.116,3.645],[-5.699,3.258]]},ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.0588,.4627,.4314],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[6.83,7.826],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:3,parent:2},{ty:4,nm:"Layer 4 Outlines 6",sr:1,st:130,op:226,ip:130,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[6.83,7.826,0],ix:1},s:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[0,0,100],t:130},{s:[243,243,100],t:225}],ix:6},sk:{a:0,k:0},p:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[234.215,-141.867,0],t:130,ti:[-14.417,18.75,0],to:[14.417,-18.75,0]},{s:[320.715,-254.367,0],t:225}],ix:2},r:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[0],t:130},{o:{x:.333,y:0},i:{x:.667,y:1},s:[-23],t:154},{s:[0],t:178}],ix:10},sa:{a:0,k:0},o:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[100],t:219},{s:[0],t:225}],ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 1",ix:1,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!0,i:[[-.132,.114],[0,0],[0,0],[.187,.22],[-.046,.305],[-.245,.165],[-.423,-.064],[0,0],[.141,-.942],[.209,-.243],[.601,-.522],[0,0],[0,0],[-.186,-.209],[.048,-.318],[.242,-.161],[.43,.064],[0,0],[.264,.317],[-.069,.455],[-.07,.124],[-.101,.103],[-.176,.156]],o:[[0,0],[0,0],[-.424,-.064],[-.187,-.219],[.047,-.319],[.245,-.164],[0,0],[1.011,.152],[-.068,.45],[-.208,.243],[0,0],[0,0],[.431,.065],[.185,.21],[-.049,.331],[-.241,.162],[0,0],[-.605,-.091],[-.265,-.317],[.023,-.156],[.07,-.123],[.102,-.103],[.177,-.155]],v:[[-5.236,2.854],[3.073,-4.518],[-2.98,-5.426],[-3.897,-5.85],[-4.108,-6.637],[-3.67,-7.361],[-2.667,-7.512],[5.135,-6.342],[6.439,-4.702],[6.025,-3.663],[4.81,-2.516],[-2.953,4.335],[4.307,5.424],[5.231,5.835],[5.437,6.628],[5.001,7.365],[3.994,7.512],[-4.912,6.174],[-6.216,5.563],[-6.511,4.404],[-6.372,3.984],[-6.116,3.645],[-5.699,3.258]]},ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.0588,.4627,.4314],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[6.83,7.826],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:4,parent:2},{ty:4,nm:"Layer 4 Outlines 5",sr:1,st:61,op:157,ip:61,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[6.83,7.826,0],ix:1},s:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[0,0,100],t:61},{s:[243,243,100],t:156}],ix:6},sk:{a:0,k:0},p:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[234.215,-141.867,0],t:61,ti:[-14.417,18.75,0],to:[14.417,-18.75,0]},{s:[320.715,-254.367,0],t:156}],ix:2},r:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[0],t:61},{o:{x:.333,y:0},i:{x:.667,y:1},s:[-23],t:85},{s:[0],t:109}],ix:10},sa:{a:0,k:0},o:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[100],t:150},{s:[0],t:156}],ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 1",ix:1,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!0,i:[[-.132,.114],[0,0],[0,0],[.187,.22],[-.046,.305],[-.245,.165],[-.423,-.064],[0,0],[.141,-.942],[.209,-.243],[.601,-.522],[0,0],[0,0],[-.186,-.209],[.048,-.318],[.242,-.161],[.43,.064],[0,0],[.264,.317],[-.069,.455],[-.07,.124],[-.101,.103],[-.176,.156]],o:[[0,0],[0,0],[-.424,-.064],[-.187,-.219],[.047,-.319],[.245,-.164],[0,0],[1.011,.152],[-.068,.45],[-.208,.243],[0,0],[0,0],[.431,.065],[.185,.21],[-.049,.331],[-.241,.162],[0,0],[-.605,-.091],[-.265,-.317],[.023,-.156],[.07,-.123],[.102,-.103],[.177,-.155]],v:[[-5.236,2.854],[3.073,-4.518],[-2.98,-5.426],[-3.897,-5.85],[-4.108,-6.637],[-3.67,-7.361],[-2.667,-7.512],[5.135,-6.342],[6.439,-4.702],[6.025,-3.663],[4.81,-2.516],[-2.953,4.335],[4.307,5.424],[5.231,5.835],[5.437,6.628],[5.001,7.365],[3.994,7.512],[-4.912,6.174],[-6.216,5.563],[-6.511,4.404],[-6.372,3.984],[-6.116,3.645],[-5.699,3.258]]},ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.0588,.4627,.4314],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[6.83,7.826],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:5,parent:2},{ty:4,nm:"Layer 4 Outlines 4",sr:1,st:0,op:96,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[6.83,7.826,0],ix:1},s:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[0,0,100],t:0},{s:[243,243,100],t:95}],ix:6},sk:{a:0,k:0},p:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[234.215,-141.867,0],t:0,ti:[-14.417,18.75,0],to:[14.417,-18.75,0]},{s:[320.715,-254.367,0],t:95}],ix:2},r:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[0],t:0},{o:{x:.333,y:0},i:{x:.667,y:1},s:[-23],t:24},{s:[0],t:48}],ix:10},sa:{a:0,k:0},o:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[100],t:79},{s:[0],t:95}],ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 1",ix:1,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!0,i:[[-.132,.114],[0,0],[0,0],[.187,.22],[-.046,.305],[-.245,.165],[-.423,-.064],[0,0],[.141,-.942],[.209,-.243],[.601,-.522],[0,0],[0,0],[-.186,-.209],[.048,-.318],[.242,-.161],[.43,.064],[0,0],[.264,.317],[-.069,.455],[-.07,.124],[-.101,.103],[-.176,.156]],o:[[0,0],[0,0],[-.424,-.064],[-.187,-.219],[.047,-.319],[.245,-.164],[0,0],[1.011,.152],[-.068,.45],[-.208,.243],[0,0],[0,0],[.431,.065],[.185,.21],[-.049,.331],[-.241,.162],[0,0],[-.605,-.091],[-.265,-.317],[.023,-.156],[.07,-.123],[.102,-.103],[.177,-.155]],v:[[-5.236,2.854],[3.073,-4.518],[-2.98,-5.426],[-3.897,-5.85],[-4.108,-6.637],[-3.67,-7.361],[-2.667,-7.512],[5.135,-6.342],[6.439,-4.702],[6.025,-3.663],[4.81,-2.516],[-2.953,4.335],[4.307,5.424],[5.231,5.835],[5.437,6.628],[5.001,7.365],[3.994,7.512],[-4.912,6.174],[-6.216,5.563],[-6.511,4.404],[-6.372,3.984],[-6.116,3.645],[-5.699,3.258]]},ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.0588,.4627,.4314],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[6.83,7.826],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:6,parent:2},{ty:4,nm:"Layer 4 Outlines 3",sr:1,st:-56,op:40,ip:-56,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[6.83,7.826,0],ix:1},s:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[0,0,100],t:-56},{s:[243,243,100],t:39}],ix:6},sk:{a:0,k:0},p:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[234.215,-141.867,0],t:-56,ti:[-14.417,18.75,0],to:[14.417,-18.75,0]},{s:[320.715,-254.367,0],t:39}],ix:2},r:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[0],t:-56},{o:{x:.333,y:0},i:{x:.667,y:1},s:[-23],t:-32},{s:[0],t:-8}],ix:10},sa:{a:0,k:0},o:{a:1,k:[{o:{x:.167,y:.167},i:{x:.833,y:.833},s:[100],t:25},{s:[0],t:39}],ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 1",ix:1,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!0,i:[[-.132,.114],[0,0],[0,0],[.187,.22],[-.046,.305],[-.245,.165],[-.423,-.064],[0,0],[.141,-.942],[.209,-.243],[.601,-.522],[0,0],[0,0],[-.186,-.209],[.048,-.318],[.242,-.161],[.43,.064],[0,0],[.264,.317],[-.069,.455],[-.07,.124],[-.101,.103],[-.176,.156]],o:[[0,0],[0,0],[-.424,-.064],[-.187,-.219],[.047,-.319],[.245,-.164],[0,0],[1.011,.152],[-.068,.45],[-.208,.243],[0,0],[0,0],[.431,.065],[.185,.21],[-.049,.331],[-.241,.162],[0,0],[-.605,-.091],[-.265,-.317],[.023,-.156],[.07,-.123],[.102,-.103],[.177,-.155]],v:[[-5.236,2.854],[3.073,-4.518],[-2.98,-5.426],[-3.897,-5.85],[-4.108,-6.637],[-3.67,-7.361],[-2.667,-7.512],[5.135,-6.342],[6.439,-4.702],[6.025,-3.663],[4.81,-2.516],[-2.953,4.335],[4.307,5.424],[5.231,5.835],[5.437,6.628],[5.001,7.365],[3.994,7.512],[-4.912,6.174],[-6.216,5.563],[-6.511,4.404],[-6.372,3.984],[-6.116,3.645],[-5.699,3.258]]},ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.0588,.4627,.4314],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[6.83,7.826],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:7,parent:2},{ty:4,nm:"Layer 3 Outlines 2",sr:1,st:0,op:240,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[38.092,69.509,0],ix:1},s:{a:0,k:[243,243,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[218.329,371.88,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 11",ix:1,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!0,i:[[0,0],[3.938,1.438],[0,0],[-65.154,-9.354],[-9.609,9.602],[7.273,-2.257],[31.437,4.606],[.57,6.841]],o:[[0,0],[-3.937,-1.437],[0,0],[28.176,4.045],[12.5,-12.49],[-7.25,2.25],[-24.005,-3.517],[-.5,-6]],v:[[-28,-24.676],[-28.625,-34.864],[-36.75,-28.176],[-3.971,35.91],[50.916,20.483],[44.387,3.718],[-3.854,14.749],[-31.25,-9.676]]},ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.0588,.4627,.4314],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[70.25,99.176],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:8},{ty:4,nm:"Layer 3 Outlines 7",sr:1,st:0,op:240,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[102.906,67.863,0],ix:1},s:{a:0,k:[100,100,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[40.876,14.559,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 8",ix:1,cix:2,np:2,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!1,i:[[0,0],[-1.698,.421],[0,0]],o:[[0,0],[1.764,-.438],[0,0]],v:[[-3.133,.437],[.499,.216],[3.133,-.637]]},ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:2,lj:2,ml:1,o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},c:{a:0,k:[1,1,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[184.867,70.508],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 9",ix:2,cix:2,np:2,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!1,i:[[0,0],[-13.214,-7.897],[0,0]],o:[[0,0],[11.938,7.135],[0,0]],v:[[-28.406,-16.684],[4.344,-2.934],[28.406,16.684]]},ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:2,lj:2,ml:1,o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},c:{a:0,k:[1,1,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[159.052,59.941],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 10",ix:3,cix:2,np:2,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!1,i:[[0,0],[8.75,1.083],[0,0],[4.898,6.334],[0,0]],o:[[.167,-5.167],[-7.795,-.965],[0,0],[-6.821,-8.818],[0,0]],v:[[29.067,17.669],[10.232,5.648],[-10.936,6.316],[-15.769,-8.852],[-29.234,-16.523]]},ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:2,lj:2,ml:1,o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},c:{a:0,k:[1,1,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[104.767,43.334],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:9,parent:1},{ty:4,nm:"Layer 3 Outlines 6",sr:1,st:0,op:240,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[102.906,67.863,0],ix:1},s:{a:0,k:[100,100,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[40.876,14.559,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 7",ix:1,cix:2,np:2,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[{c:!1,i:[[0,0],[0,-2.136]],o:[[0,0],[0,0]],v:[[.075,-2.136],[-.074,2.136]]}],t:0},{o:{x:.333,y:0},i:{x:.667,y:1},s:[{c:!1,i:[[0,0],[0,-2.136]],o:[[0,0],[0,0]],v:[[-.543,-6.868],[-1.103,.387]]}],t:47},{s:[{c:!1,i:[[0,0],[0,-2.136]],o:[[0,0],[0,0]],v:[[.075,-2.136],[-.074,2.136]]}],t:95}],ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:2,lj:2,ml:1,o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},c:{a:0,k:[1,1,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[140.2,21.552],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:10,parent:1},{ty:4,nm:"Layer 3 Outlines 5",sr:1,st:0,op:240,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[189.091,62.066,0],ix:1},s:{a:0,k:[100,100,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[127.06,8.762,0],ix:2},r:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[0],t:0},{o:{x:.333,y:0},i:{x:.667,y:1},s:[-12],t:47},{s:[0],t:95}],ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 5",ix:1,cix:2,np:2,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!1,i:[[0,0],[-6.5,0]],o:[[0,0],[0,0]],v:[[-5.25,-1.647],[5.25,1.647]]},ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:2,lj:2,ml:1,o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},c:{a:0,k:[1,1,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[194.625,63.227],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 6",ix:2,cix:2,np:2,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!1,i:[[0,0],[-4,.441]],o:[[0,0],[0,0]],v:[[-5.861,-.417],[5.861,-.024]]},ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:2,lj:2,ml:1,o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},c:{a:0,k:[1,1,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[194.952,59.676],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:11,parent:1},{ty:4,nm:"Layer 3 Outlines 4",sr:1,st:0,op:240,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[102.906,67.863,0],ix:1},s:{a:0,k:[100,100,100],ix:6},sk:{a:0,k:0},p:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[40.876,14.559,0],t:0,ti:[0,0,0],to:[0,-.652,0]},{o:{x:.333,y:0},i:{x:.667,y:1},s:[40.876,10.65,0],t:47,ti:[0,-.652,0],to:[0,0,0]},{s:[40.876,14.559,0],t:95}],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 4",ix:1,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[{c:!0,i:[[0,0],[-1.167,-3.083],[1.883,-.745]],o:[[0,0],[-2.563,.453],[-.698,-5.517]],v:[[-3.459,-5.517],[4.375,3.566],[-3.677,5.517]]}],t:0},{o:{x:.333,y:0},i:{x:.667,y:1},s:[{c:!0,i:[[0,0],[-1.167,-3.083],[1.883,-.745]],o:[[0,0],[-2.563,.453],[-.698,-5.517]],v:[[-3.459,-5.517],[4.889,2.229],[-5.529,4.18]]}],t:47},{s:[{c:!0,i:[[0,0],[-1.167,-3.083],[1.883,-.745]],o:[[0,0],[-2.563,.453],[-.698,-5.517]],v:[[-3.459,-5.517],[4.375,3.566],[-3.677,5.517]]}],t:95}],ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[1,1,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[148.792,13.35],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:12,parent:1},{ty:4,nm:"Layer 3 Outlines 3",sr:1,st:0,op:240,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[102.906,67.863,0],ix:1},s:{a:0,k:[100,100,100],ix:6},sk:{a:0,k:0},p:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[40.876,14.559,0],t:0,ti:[0,0,0],to:[0,-.309,0]},{o:{x:.333,y:0},i:{x:.667,y:1},s:[40.876,12.708,0],t:47,ti:[0,-.309,0],to:[0,0,0]},{s:[40.876,14.559,0],t:95}],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 1",ix:1,cix:2,np:2,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!1,i:[[0,0],[-4.5,-.64],[-1.083,-3]],o:[[0,0],[3.888,.552],[0,0]],v:[[-8.042,-3.709],[-2.209,-1.568],[8.041,3.709]]},ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:2,lj:2,ml:1,o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},c:{a:0,k:[1,1,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[164.792,45.791],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 2",ix:2,cix:2,np:2,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!1,i:[[0,0],[-1.229,.584],[-.75,1.334]],o:[[0,0],[1.449,-.687],[0,0]],v:[[-4.157,1.531],[-2.509,.22],[4.157,-1.531]]},ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:2,lj:2,ml:1,o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},c:{a:0,k:[1,1,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[188.925,48.696],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 3",ix:3,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!0,i:[[-.473,.595],[0,-.737],[.291,.008]],o:[[.473,-.595],[0,.736],[-.292,-.008]],v:[[-2.464,-.909],[2.937,-.499],[.202,1.495]]},ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[1,1,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[180.408,56.754],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:13,parent:1},{ty:4,nm:"Layer 3 Outlines",sr:1,st:0,op:240,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[110.357,42.738,0],ix:1},s:{a:0,k:[100,100,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[48.326,-10.566,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 12",ix:1,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:1,k:[{o:{x:.333,y:0},i:{x:.667,y:1},s:[{c:!0,i:[[0,0],[.189,-2.649],[1.25,-.708],[1.062,-2.083],[2.17,1.33],[7.67,3.66],[0,0],[2.299,-1.611],[5.67,0],[14.33,-6.66],[6.67,3.66],[1.75,6.5],[-23.25,4.5],[0,0],[-5.139,-.73],[-.67,-.38],[-2.5,0],[0,0],[-2.25,-.25],[0,0],[-.199,.669],[-2.27,-.21],[-.13,-7.47],[.061,-.56],[1.027,-3.367],[0,-3.26]],o:[[0,0],[-.125,1.75],[.333,1.25],[-1.73,2.841],[-2,-1.239],[-7.67,-3.67],[0,0],[-3.661,2.57],[-5.66,0],[-23.34,10.34],[-6.67,-3.67],[-5,-25.5],[23.25,-4.5],[0,0],[3.221,.46],[.08,-1.67],[2.5,0],[0,0],[2.25,.25],[.13,-.089],[.971,-3.13],[2.54,.23],[.01,.63],[6.782,7.464],[-1.342,4.396],[0,5.802]],v:[[78.905,26.786],[80.417,31.214],[78.333,34.339],[78.167,39.401],[68.974,41.04],[44.834,26.051],[24.424,18.381],[22.004,22.711],[4.664,21.051],[-26.997,31.711],[-71.667,34.051],[-82.917,17.131],[-47.167,-37.87],[9.084,-25.62],[24.853,-25.139],[32.334,-23.37],[35.334,-41.62],[50.834,-27.87],[59.834,-28.12],[65.932,-27.671],[66.432,-28.859],[72.333,-39.87],[81.206,-20.717],[81.134,-18.918],[85.583,4.631],[86.654,16.14]]}],t:0},{o:{x:.333,y:0},i:{x:.667,y:1},s:[{c:!0,i:[[0,0],[.189,-2.649],[1.25,-.708],[1.062,-2.083],[2.17,1.33],[7.67,3.66],[0,0],[2.299,-1.611],[5.67,0],[14.33,-6.66],[6.67,3.66],[1.75,6.5],[-23.25,4.5],[0,0],[-5.139,-.73],[-.67,-.38],[-2.5,0],[0,0],[-2.25,-.25],[0,0],[-.199,.669],[-2.27,-.21],[-.13,-7.47],[.061,-.56],[1.027,-3.367],[0,-3.26]],o:[[0,0],[-.125,1.75],[.333,1.25],[-1.73,2.841],[-2,-1.239],[-7.67,-3.67],[0,0],[-3.661,2.57],[-5.66,0],[-23.34,10.34],[-6.67,-3.67],[-5,-25.5],[23.25,-4.5],[0,0],[3.221,.46],[.08,-1.67],[2.5,0],[0,0],[2.25,.25],[.13,-.089],[.971,-3.13],[2.54,.23],[.01,.63],[6.782,7.464],[-1.342,4.396],[0,5.802]],v:[[78.905,26.786],[80.417,31.214],[78.333,34.339],[78.167,39.401],[68.974,41.04],[44.834,26.051],[24.424,18.381],[22.004,22.711],[4.664,21.051],[-26.997,31.711],[-71.667,34.051],[-82.917,17.131],[-47.167,-37.87],[7.643,-31.175],[23.412,-30.695],[30.893,-28.925],[35.128,-44.294],[50.628,-30.544],[59.628,-30.794],[65.726,-30.345],[66.226,-31.534],[72.128,-42.544],[81,-23.392],[81.134,-18.917],[85.378,1.956],[86.448,13.466]]}],t:47},{s:[{c:!0,i:[[0,0],[.189,-2.649],[1.25,-.708],[1.062,-2.083],[2.17,1.33],[7.67,3.66],[0,0],[2.299,-1.611],[5.67,0],[14.33,-6.66],[6.67,3.66],[1.75,6.5],[-23.25,4.5],[0,0],[-5.139,-.73],[-.67,-.38],[-2.5,0],[0,0],[-2.25,-.25],[0,0],[-.199,.669],[-2.27,-.21],[-.13,-7.47],[.061,-.56],[1.027,-3.367],[0,-3.26]],o:[[0,0],[-.125,1.75],[.333,1.25],[-1.73,2.841],[-2,-1.239],[-7.67,-3.67],[0,0],[-3.661,2.57],[-5.66,0],[-23.34,10.34],[-6.67,-3.67],[-5,-25.5],[23.25,-4.5],[0,0],[3.221,.46],[.08,-1.67],[2.5,0],[0,0],[2.25,.25],[.13,-.089],[.971,-3.13],[2.54,.23],[.01,.63],[6.782,7.464],[-1.342,4.396],[0,5.802]],v:[[78.905,26.786],[80.417,31.214],[78.333,34.339],[78.167,39.401],[68.974,41.04],[44.834,26.051],[24.424,18.381],[22.004,22.711],[4.664,21.051],[-26.997,31.711],[-71.667,34.051],[-82.917,17.131],[-47.167,-37.87],[9.084,-25.62],[24.853,-25.139],[32.334,-23.37],[35.334,-41.62],[50.834,-27.87],[59.834,-28.12],[65.932,-27.671],[66.432,-28.859],[72.333,-39.87],[81.206,-20.717],[81.134,-18.918],[85.583,4.631],[86.654,16.14]]}],t:95}],ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.0588,.4627,.4314],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[108.917,42.62],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:14,parent:1},{ty:4,nm:"Layer 2 Outlines",sr:1,st:0,op:240,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:0,k:[103.915,111.603,0],ix:1},s:{a:0,k:[100,100,100],ix:6},sk:{a:0,k:0},p:{a:0,k:[50.145,86.718,0],ix:2},r:{a:0,k:0,ix:10},sa:{a:0,k:0},o:{a:0,k:100,ix:11}},ef:[],shapes:[{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 1",ix:1,cix:2,np:2,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!1,i:[[0,0],[-.033,-.406]],o:[[0,0],[0,0]],v:[[-.174,-1.453],[.174,1.453]]},ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:2,lj:2,ml:1,o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},c:{a:0,k:[1,1,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[170.661,122.783],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 2",ix:2,cix:2,np:2,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!1,i:[[0,0],[-2.31,-22.025]],o:[[0,0],[0,0]],v:[[-4.306,-23.886],[4.306,23.886]]},ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:2,lj:2,ml:1,o:{a:0,k:100,ix:4},w:{a:0,k:7,ix:5},c:{a:0,k:[1,1,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[164.875,84.913],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 3",ix:3,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!0,i:[[0,-10.148],[10.148,0],[0,10.148],[-10.148,0]],o:[[0,10.148],[-10.148,0],[0,-10.148],[10.148,0]],v:[[18.375,0],[0,18.375],[-18.375,0],[0,-18.375]]},ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.9843,.749,.1412],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[103.914,204.58],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 4",ix:4,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!0,i:[[-1.409,-.32],[0,0],[0,0],[0,0],[-1.51,0]],o:[[0,0],[0,0],[0,0],[1.41,-.32],[1.5,0]],v:[[4.375,-3.655],[4.375,4.145],[-4.375,4.145],[-4.375,-3.655],[.005,-4.145]]},ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[1,1,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[103.914,188.56],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 5",ix:5,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!0,i:[[-1.47,0],[0,0],[3.75,0],[0,0],[0,0],[-1.45,0]],o:[[0,0],[0,0],[-3.75,0],[0,0],[1.47,0],[1.45,0]],v:[[4.375,-2.495],[4.375,2.505],[.075,1.328],[-4.375,2.505],[-4.375,-2.495],[.005,-2.505]]},ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[1,1,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[103.914,179.085],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 6",ix:6,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!0,i:[[-1.47,0],[0,0],[0,0],[0,0],[-1.45,0]],o:[[0,0],[0,0],[0,0],[1.47,0],[1.45,0]],v:[[4.375,-8.24],[4.375,8.25],[-4.375,8.25],[-4.375,-8.24],[.005,-8.25]]},ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.9843,.749,.1412],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[103.914,184.83],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 7",ix:7,cix:2,np:2,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!1,i:[[0,0],[67.667,0],[0,0]],o:[[0,0],[-67.667,0],[0,0]],v:[[92.819,5.881],[0,-5.881],[-92.819,5.881]]},ix:2}},{ty:"st",bm:0,hd:!1,mn:"ADBE Vector Graphic - Stroke",nm:"Stroke 1",lc:2,lj:2,ml:1,o:{a:0,k:100,ix:4},w:{a:0,k:2,ix:5},c:{a:0,k:[1,1,1],ix:3}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[103.914,147.128],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 8",ix:8,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!0,i:[[0,-6.92],[24.27,-2.26],[8.17,0],[22.21,2.07],[0,4.96],[-40.53,.31],[-1.45,0],[-1.47,0]],o:[[0,4.96],[-22.21,2.07],[-8.18,0],[-24.27,-2.26],[0,-6.92],[1.47,0],[1.45,0],[40.52,.31]],v:[[93.165,-.86],[53.105,9.93],[.005,12.53],[-53.105,9.93],[-93.165,-.86],[-4.375,-12.52],[.005,-12.53],[4.375,-12.52]]},ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[1,1,1],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[103.914,189.11],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]},{ty:"gr",bm:0,hd:!1,mn:"ADBE Vector Group",nm:"Group 9",ix:9,cix:2,np:4,it:[{ty:"sh",bm:0,hd:!1,mn:"ADBE Vector Shape - Group",nm:"Path 1",ix:1,d:1,ks:{a:0,k:{c:!0,i:[[1.66,-2.5],[60.791,-1.939],[7.03,0],[6.171,.201],[1.51,2.27],[-1,3],[0,0],[-11.831,37.08],[-21.5,0],[-18.519,-58.04],[0,0],[-1,-3]],o:[[-1.52,2.27],[-6.16,.201],[-7.03,0],[-60.79,-1.939],[-1.669,-2.5],[1,-3],[0,0],[18.52,-58.04],[21.5,0],[11.84,37.08],[0,0],[1,3]],v:[[102.005,86.995],[19.775,101.854],[.005,102.165],[-19.775,101.854],[-101.995,86.995],[-101.995,59.665],[-96.495,51.665],[-76.664,-39.165],[.005,-102.165],[76.664,-39.165],[96.505,51.665],[102.005,59.665]]},ix:2}},{ty:"fl",bm:0,hd:!1,mn:"ADBE Vector Graphic - Fill",nm:"Fill 1",c:{a:0,k:[.9843,.749,.1412],ix:4},r:1,o:{a:0,k:100,ix:5}},{ty:"tr",a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},sk:{a:0,k:0,ix:4},p:{a:0,k:[103.915,102.415],ix:2},r:{a:0,k:0,ix:6},sa:{a:0,k:0,ix:5},o:{a:0,k:100,ix:7}}]}],ind:15,parent:1}],b="5.6.4",A=24,E=118,B=0,D=[],L={nm:h,ddd:y,h:d,w:f,meta:u,layers:G,v:b,fr:A,op:E,ip:B,assets:D};export{L as E,w as u};