const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here
function batteries(array,reducer){
    let totalBatteries=array.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });
    return totalBatteries;
}
batterries(batteryBatches)