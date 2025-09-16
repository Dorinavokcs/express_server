import express from 'express'
export const getAll = async (req: express.Request, res: express.Response) => {
    const data = await getUsers()[
        {
            name: "Lajos",
            address: "hatvan"
        },
        {
            name:"bela",
            address:"gy"
        }
    ];
    res.status(200)
    .type("application/json")
    .send(data)
}

export const addUser=(req:express.Request, res: express.Response)=>{
    const newUser= req.body
}

export const deleteUser = async (req:express.Request, res:express.Response) => {
   const id = parseInt(req.params.id!);
   if(id===3)
    res.status(200).type("application/json").send({message:"successful"})
}