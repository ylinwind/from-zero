export const TEST_ACTION_1 = 'TEST_ACTION_1';
export const TEST_ACTION_2 = 'TEST_ACTION_2';

export function test1(text){
    return{
        type:TEST_ACTION_1,
        text
    }
}
export function test2(text){
    return{
        type:TEST_ACTION_2,
        text
    }
}

export function fetchWays(text){
    
}