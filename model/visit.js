require("dotenv").config()
const axios = require("axios")
exports.createVisit = (req, res, next) => {

    var pttypeAll = process.env.PTTYPE_ALL
    var pttypeHI = process.env.PTTYPE_HI
    var pttypeOP = process.env.PTTYPE_OP

    // console.log(pttypeAll);
    req.getConnection(function (err, connection) {
        connection.query('SET NAMES UTF8')
        connection.query("SELECT (SELECT "+process.env.AMOUNT_BED+") as bed,(SELECT count(vn) as cc from vn_stat vn WHERE vn.pttype in (" + pttypeAll + ")"
            + " and DATEDIFF(CURDATE(),vn.vstdate) <= 10 ) as healing,(SELECT count(vn) as cc from vn_stat vn WHERE vn.pttype in (" + pttypeHI + ") "
            + " and DATEDIFF(CURDATE(),vn.vstdate) <= 10 ) as hi,(SELECT count(vn) as cc from vn_stat vn WHERE vn.pttype in (" + pttypeOP + ") "
            + " and DATEDIFF(CURDATE(),vn.vstdate) <= 10 ) as op,(SELECT "+process.env.HOSP_CODE+") as hospcode,(SELECT count(v.vn) as c from vn_stat v "
            + " LEFT JOIN opdscreen o on o.vn = v.vn "
            + " WHERE v.pttype in (" + pttypeAll + ") "
            + " and DATEDIFF(CURDATE(),v.vstdate) <= 10 and ((o.hpi like '%ไข้%') or ((o.hpi like '%เจ็บคอ%')) or ((o.hpi like '%ไอ%'))) ) as symptoms", function (err, results) {
                if (err) return next(err)
                if (results.length > 0) {
                    axios.post(process.env.API_URL+'/api/opsi/createVisit', { rs: results }, {
                        headers: {
                            'Authorization': process.env.JWT_SECRET
                        }
                    }).then(rs => {
                       // console.log(rs.data);
                       res.send({status: 200,rs: rs.data})
                    }
                    ).catch(err => res.send(err));
                }
            });
    });

}