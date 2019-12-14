let lengaburu = {
    horses:100,
    elephant:50,
    tanks:10,
    gun:5
}

let reqArr = [0,0,0,0]
    

let getValue = function(arr){
    while(allZero(arr)){
        for(let i=0;i<arr.length;i++){
            reduceArmy(arr,i)
        }
    }

    function reduceArmy(arr,index) {
        let value = ''
        if (index === 0) value = 'horses';
        if (index === 1) value = 'elephant';
        if (index === 2) value = 'tanks';
        if (index === 3) value = 'gun';
        let valArr = ['horses','elephant','tanks','gun']

        let reqHorses = Math.ceil(arr[index] / 2)
        if(arr[index] != 0 && lengaburu[value] === 0){
            for(let j = 0;j<valArr.length;j++){
                if(lengaburu[valArr[j]] != 0){
                    getValueOfCurrent(reqHorses,value,lengaburu[valArr[j]],valArr[j],j,index,arr)
                }
            }
        }else if(reqHorses > lengaburu[value] && lengaburu[value] != 0){
            arr[index] = arr[index] - (lengaburu[value] * 2)
            reqArr[index]=reqArr[index]+lengaburu[value]
            lengaburu[value] = 0
        }else if (reqHorses < lengaburu[value] || lengaburu[value] != 0) {
            arr[index] = arr[index] - (reqHorses * 2)
            reqArr[index]=reqArr[index]+reqHorses
            lengaburu[value] = lengaburu[value] - reqHorses
        }

        if(allZero(lengaburu)){
            console.log("The battle is lost")
        }
    }

    console.log(reqArr)

    function allZero(arr){
        let sum = arr.reduce((item,aggre)=>item+aggre)
        if(sum === 0 || sum < 0) return 0
        else return 1
    }

    function getValueOfCurrent(needed,needVal,got,gotVal,j,i,arr){
        ++j
        ++i
        if(j>i){
            let gap = j-i
            while(arr[i-1]){
                arr[i-1] = arr[i-1] - (gap*2)
                lengaburu[gotVal] = lengaburu[gotVal] - 1
                reqArr[j-1]=reqArr[j-1]+1
            }
        }else{
            let gap = i-j
            while(arr[i-1]){
                arr[i-1] = arr[i-1] - Math.ceil(gap/2)
                lengaburu[gotVal] = lengaburu[gotVal] - 1
                reqArr[j-1]=reqArr[j-1]+1
            }
        }
    }
    
}


function minimumBattle(){
    let arr = [250,96,26,8]
    getValue(arr)
}

minimumBattle()