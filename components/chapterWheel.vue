<template>
  
    hi
</template>

<script>
</script>

<style lang="scss" scoped>

@keyframes i {
  from {transform: rotateZ(0deg);}
  to {transform: rotateZ(70deg);}
}

.timeline-wrapper{
  background-color: #936b3478;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  position: relative;
  transform: rotateX(70deg);

  
  .timestamp-spinner{
    width: 100%;
    position: absolute;
    bottom: 50%;
    transform: translate(0,calc(-50% + 45px));
    transition: transform ease-in-out 1s;
    margin: 0 0 -16px 0;
    
    &.i{
      transform: rotateZ(-90deg);
    }
    
    &.ii{
      transform: rotateZ(-45deg);
    }
    
    &.iii{
      transform: rotateZ(0deg);
    }
    
    &.iv{
      transform: rotateZ(45deg);
    }
    &.v{
      transform: rotateZ(90deg);
    }
    
    
    .timestamp{
      font-size: 32px;
      transform: rotateX(0deg) rotateY(0deg) rotateZ(90deg);
      width: fit-content;
      
      
      &:hover{
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
  .description{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotateX(0deg);
      font-size: 48px;
    }
}
.btn-wrapper{
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  #spin-btn-prev, #spin-btn-next{
    width: 100px;
  }
}



</style>
