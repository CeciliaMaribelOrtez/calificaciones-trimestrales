import{a as f}from"./auth-f66db6b2.js";import{f as g,Q as p,T as b,j as h,h as v,r as w,O as y,A as E,K as T,$ as d,D,o as S,s as u}from"./trimestres-999177be.js";const l=g(),L=e=>{p(b(l,"notas"),e)},N=async e=>{h(v(b(l,"notas"),w("user","==",f().id)),s=>{const r=[];s.forEach(t=>{r.push({...t.data(),id:t.id})}),e(r)})},k=async e=>{const s=await y(E(l,"notas",e));return{...s.data(),id:s.id}},A=async(e,s)=>{await T(E(l,"notas",e),s)};let c=!1,B=e=>{c=e},i="",C=e=>{i=e};const m=e=>{$("#lista").DataTable({responsive:{details:{renderer:$.fn.dataTable.Responsive.renderer.listHiddenNodes()}},language:{url:"//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"},data:e,drawCallback:function(){document.querySelectorAll(".eliminar").forEach(t=>{t.addEventListener("click",async()=>{const a=t.dataset.id;swal({title:"¿Está seguro de eliminar?",text:"Si elimina una calificacion no podrá recuperarla!",icon:"warning",buttons:["No, cancelar","Si, eliminar"],dangerMode:!0}).then(async n=>{n&&(await eliminarTrimestre(a),swal("Eliminado!","La nota se ha borrado!","success"))})})}),document.querySelectorAll(".editar").forEach(t=>{t.addEventListener("click",async()=>{c=!0,i=t.dataset.id;try{const a=await k(i);formulario.trimestre.value=a.trimestre,formulario.profesor.value=a.profesor,formulario.asignatura.value=a.asignatura,formulario.nota.value=a.nota}catch(a){console.log(a)}})})}})};window.$=d;window.DataTable=D;const o=document.getElementById("formulario");let I=document.getElementById("guardar");document.addEventListener("DOMContentLoaded",async()=>{const e=document.getElementById("trimestre"),s=[];await S(r=>{r.forEach(t=>{const a=document.createElement("option");a.value=t.id,a.textContent=t.nombre,e.appendChild(a),s[t.id]=t.nombre})}),await N(r=>{let t=[];r.forEach(a=>{t.push([s[a.trimestre],a.profesor,a.asignatura,a.nota,`<div class="tareas">
                                 <button data-id="${a.id}" class="editar">Editar</button>
                                 <button data-id="${a.id}" class="eliminar">Eliminar</button>
                             </div>`])}),d.fn.DataTable.isDataTable("#lista")&&d("#lista").DataTable().destroy(),m(t)})});I.addEventListener("click",()=>{const e=o.trimestre.value,s=o.profesor.value,r=o.asignatura.value,t=o.nota.value;if(e===""||s===""||r===""||t===""){u({title:"Error!",text:"Todos los campos son obligatorios!",icon:"warning",button:"Ok!"});return}let a=f().id;const n={trimestre:e,profesor:s,asignatura:r,nota:t,user:a};c?(A(i,n),B(!1),C("")):L(n),u("Bien hecho!","Sus datos se han registrado!","success"),o.reset()});
