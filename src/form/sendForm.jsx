import axios from 'axios';
import React from 'react';

import './sendForm.scss'

const SendForm = () => {
    const TOKEN = '6291694604:AAFPCSbZU6Sp4T4FsijHPKmBaTVsjDLb-6E'
    const CHAT_ID = '-918568863'
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`


    React.useEffect(() => {

        const success = document.getElementById('success')
        document.getElementById('tg').addEventListener('submit', function (e) {
            e.preventDefault()
            let message = `<b>Заявка:</b>\n`
            message += `<b>Отправитель: ${this.name.value}</b>\n`
            message += `<b>Почта: ${this.email.value}</b>\n`
            message += `<b>Номер Телефона: ${this.phone.value}</b>\n`
            message += `<b>Письмо: ${this.txt.value}</b>\n`
            // message += `<b>Nomer ${this.phone.value}</b>\n`
            // console.log(message);

            axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            })
                .then((res) => {
                    this.name.value = ''
                    this.email.value = ''
                    success.innerHTML = 'Zayavka Prinyata'
                    success.style.display = "block"
                })
        })
    }, [])
    return (
        <div className="container mt-5 pt-5 pb-5 d-flex justify-content-between align-items-center">
            <div className="col-md-4 ">
                <form id="tg">
                    <div className="form-group">
                        <label className="form-label">Ваше имя</label>
                        <input type="text" name="name" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                        <label className="form-label">Номер</label>
                        <input type="tel" name="phone" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                        <label className="form-label">На какой кур вы хотите</label>
                        <textarea  name="txt" className="form-control h4" placeholder='Расскажите про какой курс хотите и раньше изучали эту' />
                    </div>
                    <div id='success' className="alert alert-success mt-3" role="alert" ></div>
                    <button type="submit" className="btn btn-primary mt-4">Send</button>
                </form>
            </div>
            <img className=' col-md-7 ' src="https://yandex-images.clstorage.net/ID9QB5408/ade139pFb2/QZdVNWGguVTQLDnDKsrEfOIhcMGPQw90hZLU7MNhTKcdXCdtOfrDjcMeGlsu-oLvYQTm3W3ZGrB-lP9wXe5NowOXEXkq4q8Lhm8hlyLJwX7_fDPQkxkLKZ_QiLbQPhD8TQtOVx2L4OS0dDctA4HDtj1Xusd1ml3dENbVDHnaGN5EsUsQcZX_YdIpY-A81fdd1Wpz45MHAieksYi2zkE8kStPQXoIuMPLjV8mOAyIw5k9V67lP71M6gq67yNo5jLafZ13N3iS-kj6BlTCB8fQb9xIW9KdPD8bmZWxjfdTCpA1bXlbKoLUyYNsCwU6pNOHMEaW_BmhbNEXnfAkaO8w_12ibjVBkttj8BVW4y_i6XTwS0bNghkXBaCDjq_rTRaSFl19YTWD0tmKQB8TG4vWhSd5jc8yj0XjB4_dK0z9DuVNnGQNRIflcOAoe8057dhhwHlQ0JA8BDyOrpGWxmQnhRZcW38oh-Djv3YkOiWmwps7XbvLGqRy8A2Z_i5w-jj6dp1TOkaJ-l_OG3bXOu_Ic9VCT9S5BQ0Nu5iIqvlnCqQxWV57Lprl-aFOHBAitde1FVSUzB6nfecmhPs4fds-z3mFaz5moPNfwzhH4jvWyU3gVXnQnDYBB7aspb_GdBuEGHJ8ShO7wfWPdxknBKLIpgBYk9U4qXvhDIX9IlP7PfhSlWIyfKr2SPk4ZNce1NR67V5O0YsaLQWVpZm65nMPrxB1XGoanNjCmFILGSik2aMXWo7pH6BrzwG_2SxT8QzvT7hWO32qwXzEEVjpPMbWdfJsS9yBIDcOuLmHjMtGPIA4Ul1CKqzp659WPTkEgcueBniF1j2qY803kusNc-ULx0enTC1HoP1O0itG9BjpxV_UaEjMswsiILaun6rLfAygJHJWYzWO4_CpaB8SH6P9nBBJteYMp0zzHabxOEnTIPZTknEYQYXabNoYePwqzNJJ8HtzzZw1Kzi5vJu501U" alt="" />
        </div>

    );
};

export default SendForm;