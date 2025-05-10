const init = [
    {
        "id": 1,
        "fullName": "Nguyen Thi A",
        "email": "nguyenthia@gmail.com",
        "password": "nguyenthia",
        "token": "sdhfu2324i1is"
    },
    {
        "id": 2,
        "fullName": "Nguyen Thi B",
        "email": "nguyenthib@gmail.com",
        "password": "nguyenthib",
        "token": "axxownkaw13w"
    },
    {
        "id": 3,
        "fullName": "Nguyen Thi C",
        "email": "nguyenthic@gmail.com",
        "password": "nguyenthic",
        "token": "kvni2nkfksdawf"
    }
]

const accountReducer = (state = init, action) => {
    let newState = [...state];

    switch (action.type){
        case "REGISTER_ACCOUNT":
            return [
                ...state,
                {
                    id: Date.now(),
                    name: action.info.name.value,
                    email: action.info.email.value,
                    password: action.info.password.value
                }
            ];
        default:
            return state;
    }
}

export default accountReducer;