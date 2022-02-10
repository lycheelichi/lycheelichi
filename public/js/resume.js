const test = document.querySelector('.languages-list');

const fTableHead = document.getElementById('frontend-tr');
const bTableHead = document.getElementById('backend-tr');
const mTableHead = document.getElementById('mobile-tr');
const oTableHead = document.getElementById('other-tr');

// if(screen.width <=650 ){
//     changeSkillTable(fTableHead);
//     changeSkillTable(bTableHead);
//     changeSkillTable(mTableHead);
//     changeSkillTable(oTableHead);
// }

window.addEventListener('load',(e)=>{
    changeSkillTable(fTableHead);
    changeSkillTable(bTableHead);
    changeSkillTable(mTableHead);
    changeSkillTable(oTableHead);
})

function changeSkillTable(table){

    for(let i = 0; i <table.children.length; i ++){
        let newTableTR= document.createElement('tr');
        let newTableTH = document.createElement('th');
        // console.log(table.children[0].innerHTML);
        if(table.children[i].innerHTML != table.children[0].innerHTML){
            newTableTH.innerHTML = table.children[i].innerHTML;
            newTableTR.classList.add('newlyAddedTableTR')
            newTableTR.appendChild(newTableTH);
            newTableTR.hidden = true
            table.after(newTableTR);
        }
    }
}


// window.onresize = ()=>{
//     let allNewTRs = document.getElementsByClassName('newlyAddedTableTR');
//     if(allNewTRs){
//         if(screen.width <=650){
//             for(let i = 0;i<allNewTRs.length;i++){
//                 allNewTRs[i].hidden = false;
//             }
//          }else{
//                  for(let i = 0;i<allNewTRs.length;i++){
//                      allNewTRs[i].hidden = true;
//                  }
//          }
//     }
// }

window.addEventListener('resize',(e)=>{
    console.log(e)
    let allNewTRs = document.getElementsByClassName('newlyAddedTableTR');
    if(allNewTRs){
        if(screen.width <=650){
            for(let i = 0;i<allNewTRs.length;i++){
                allNewTRs[i].hidden = false;
            }
         }else{
                 for(let i = 0;i<allNewTRs.length;i++){
                     allNewTRs[i].hidden = true;
                 }
         }
    }

},true)





// window.addEventListener('resize',(e)=>{
//     if(screen.width <=650){
 
//         if(eventCounter >0){
//             return
//         }else{
//             changeSkillTable(fTableHead);
//             changeSkillTable(bTableHead);
//             changeSkillTable(mTableHead);
//             changeSkillTable(oTableHead);
//             eventCounter +=1;
//         }
//     }else if(screen.width >650){
//         eventCounter --;
//         if(eventCounter >0){
//             return
//         }else {
//             allNewTRs = document.getElementsByClassName('newlyAddedTableTR');
//             for(let i = 0; i <allNewTRs.length;i++){
//                 allNewTRs[i].remove();
//             }
//         eventCounter ++;

//         }
//         console.log(eventCounter)
//     }


//     // if(eventCounter >0){
//     //     return
//     // }else{
//     //     if(screen.width <=650 ){
//     //         changeSkillTable(fTableHead);
//     //         changeSkillTable(bTableHead);
//     //         changeSkillTable(mTableHead);
//     //         changeSkillTable(oTableHead);
//     //         eventCounter +=1;
//     //     }
//     // }
// })