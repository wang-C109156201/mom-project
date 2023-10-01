$(".box").on({
  "dragstart": function(event){
    console.log("dragstart");
  event.originalEvent.dataTransfer.setData('text/plain',event.target.id)
  },
  "dragend": function(){
    console.log("dragend");
    $(".target").removeClass("over")
  }
})
  
$(".target").on({
  "dragenter": function(event){
    event.preventDefault();
    
    console.log("dragenter");
  },
  "dragover": function(event){
    event.preventDefault();
    $(this).addClass("over")
    
    console.log("dragover");
    
  },
  "dragleave": function(){
    console.log("dragleave");
    $(".target").removeClass("over")
    
  },
  "drop": function(event){
    event.preventDefault();
    // event.stopPropagation(); //停止事件氣泡現象
    console.log("drop");
    let id = event.originalEvent.dataTransfer.getData('text/plain');
    $("#"+id).appendTo(event.target);
  }
})