// First solution
export const addTwoNumbers_1 = (params: {
    first: number;
    second: number;
}) => {
    return params.first + params.second;
};

// Alternative solution
type AddTwoNumbersParams = {
    first: number;
    second: number;
};

export const addTwoNumbers_2 = (params: AddTwoNumbersParams) => {
    return params.first + params.second;
};
