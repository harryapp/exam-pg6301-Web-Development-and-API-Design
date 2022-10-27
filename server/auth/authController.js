
async function loginSuccess(req, res){
        if (req.user) {
            const { provider } = req.params;
            const { access_token } = req.body;


            res.status(200).json({
                success: true,
                message: "successfull",
                user: req.user,
                cookies: (provider + "_access_token" , access_token, { signed: true })

            });
            res.cookie(provider + "_access_token" , access_token, { signed: true });
        }

}

async function loginFailed(req, res){

    res.status(401).json({
        success: false,
        message: "failure",
    });

}


export default {loginSuccess, loginFailed}