let user = [
    {"id":1,"name":"xyz","email":"xyz@gmail.com"},
    {"id":2,"name":"abc","email":"abc@gmail.com"},
    {"id":3,"name":"asdf","email":"asdf@gmail.com"},
    {"id":4,"name":"qwerty","email":"qwerty@gmail.com"},
]

export const getUser = (req,res) => {
    res.send(user);
};

export const getUserById= (req,res) => {
    // let userData = user.filter((n) => n.id == req.params.id);
    let userData = user.find((n) => n.id == req.params.id);
    console.log(userData);
    res.send(userData);
};

export const postUser = (req,res) =>{
    let newUser = {
        id:user.length+1,
        name:req.body.name,
        email:req.body.email,
    }
    user.push(newUser);
    console.log(newUser);
    res.send(user);
};

export const putUser = (req,res) => {
    let userData = user.find((n) => n.id == req.params.id)
    console.log(userData);
        userData.name = req.body.name,
        userData.email = req.body.email
     
    res.send(userData);
};

export const deleteUser = (req,res) => {
    const id = req.params.id;
    user = user.filter((n) => {
       return n.id != id;
    })
    res.send(user)
};    

