import React from "react";

export default function Benefit(){
    return (
        <>
            <div className="container">
                <h3 className="text-white text-center mt-5 mb-4" style={{fontSize:"50px"}}>FILMSPOT MEMBERSHIP</h3>

                <div className="d-flex">
                    <img className="col-3 me-3" style={{width:"330px", height:"160px"}} src="https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/2020/membership_cgv.jpg" alt="" />
                    <div id="accordian" className="col-9">
                        <div className="card">
                            <div className="card-header">
                                <a href="#one" data-bs-toggle="collapse" className="btn">Chương Trình Điểm Thưởng</a>
                            </div>

                            <div id="one" className="collapse show" data-bs-parent="#accordian">
                                <div className="card-body">
                                    <p>Chương trình bao gồm 4 đối tượng thành viên U22 | CGV Member | CGV VIP và CGV VVIP, với những quyền lợi và mức ưu đãi khác nhau. 
                                    Mỗi khi thực hiện giao dịch tại hệ thống rạp CGV, bạn sẽ nhận được một số điểm thưởng tương ứng với cấp độ thành viên:</p>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Điểm Thưởng</th>
                                                <th>U22 | Member</th>
                                                <th>VIP</th>
                                                <th>VVIP</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Tại Quầy Vé</td>
                                                <td>5%</td>
                                                <td>7%</td>
                                                <td>10%</td>
                                            </tr>

                                            <tr>
                                                <td>VD: 100.000VND</td>
                                                <td>5 Điểm</td>
                                                <td>7 Điểm</td>
                                                <td>10 Điểm</td>
                                            </tr>

                                            <tr>
                                                <td>Quầy Bắp Nước</td>
                                                <td>3%</td>
                                                <td>4%</td>
                                                <td>5%</td>
                                            </tr>

                                            <tr>
                                                <td>VD: 100.000VND</td>
                                                <td>3 Điểm</td>
                                                <td>4 Điểm</td>
                                                <td>5 Điểm</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p>1 điểm = 1.000 VND, có giá trị như tiền mặt, được dùng để mua vé xem phim, thức uống/ combo tương ứng tại CGV và đổi voucher ưu đãi trên CGV Reward. Ví dụ: Với giao dịch mua vé giá 100.000 VND bạn có thể:
        <br />
    - Thanh toán 80.000 VND + 20 điểm thưởng
<br />
    - Thanh toán với 10.000 VND + 90 điểm thưởng
<br />
    Cách làm tròn điểm thưởng:
<br />
    - Từ 0.1 đến 0.4: làm tròn xuống (Ví dụ: 3.2 điểm sẽ được tích vào tài khoản 3 điểm). Lưu ý: giao dịch có điểm tích lũy từ 0.1 đến 0.4 sẽ không được tích lũy điểm do làm tròn xuống 0, và đồng nghĩa với không được tích lũy chi tiêu.
<br />
    - Từ 0.5 đến 0.9: làm tròn lên (Ví dụ: 3.6 điểm sẽ được tích vào tài khoản 4 điểm)
<br />
    Lưu ý:
<br />
    1. Điểm thưởng có thời hạn sử dụng là 01 năm. Ví dụ: Điểm của bạn được nhận vào 08:00 ngày 05/01/2024 sẽ hết hạn sử dụng vào lúc 07:59:59 ngày 05/01/2025.
<br />
    2. Điểm thưởng có giá trị sử dụng tại tất cả các rạp CGV trên toàn quốc.
<br />
    3. Sau khi dịch vụ được CGV Việt Nam hoàn thành, điểm thưởng sẽ được ghi nhận vào tài khoản của bạn vào 8:00 sáng ngày tiếp theo. Ví dụ: suất chiếu của bạn diễn ra vào ngày 05/01/2024, điểm thưởng sẽ được ghi nhận vào tài khoản của bạn vào 8:00 sáng ngày 06/01/2024.
<br />
    4. KHÔNG tích lũy chi tiêu/điểm thưởng đối với các giao dịch đã áp dụng các chương trình giảm giá/khuyến mãi do CGV và đối tác tổ chức.
<br />
    5.KHÔNG tích lũy chi tiêu/điểm thưởng đối với các giao dịch:
<br />
    - Mua/sử dụng voucher
<br />
    - Mua thẻ quà tặng và eGift
<br />
    - Mua vé/ F&B bằng thẻ CGVian, thẻ CJ membership và thẻ Premium
<br />
    - Giao dịch có hình thức thanh toán 100% bằng điểm thưởng.
<br />
    6. Thành viên được tích lũy điểm/chi tiêu cho tối đa 10 giao dịch/ngày.
<br />
    7. Bạn có thể dễ dàng kiểm tra điểm thưởng của mình trên CGV Website hoặc Ứng dụng CGV trên điện thoại (Mobile App).
<br />
    8. Điểm thưởng tối thiểu được sử dụng cho mỗi giao dịch là 20 điểm trở lên.
<br />
    9. Thành viên khi thanh toán trực tuyến trên Website/APP, trong 1 giao dịch, điểm thưởng chỉ được sử dụng thanh toán tối đa 90% giá trị đơn hàng.
<br />
    10. Khi thực hiện các giao dịch sử dụng điểm thưởng hoặc vé miễn phí trực tiếp tại rạp, khách hàng vui lòng xuất trình tài khoản thành viên (Thẻ cứng hoặc tài khoản online trên Ứng dụng CGV) và Giấy tờ tùy thân hoặc giấy tờ khác có thể hiện ngày tháng năm sinh (Bản gốc hoặc ảnh chụp) cho nhân viên rạp để tiến hành xác thực chính chủ tài khoản thành viên. Nhân viên rạp có quyền từ chối yêu cầu của khách hàng nếu khách hàng không cung cấp được tài khoản thành viên và/hoặc giấy tờ quy định tại đây hoặc các thông tin Khách Hàng cung cấp không trùng khớp với nhau. Việc thực hiện các giao dịch sử dụng điểm thưởng hoặc vé miễn phí trên website của CGV và/hoặc ứng dụng CGV trên điện thoại luôn được mặc định là được sử dụng bởi chính chủ tài khoản thành viên. Khách Hàng có nghĩa vụ bảo mật tài khoản Thành Viên của mình. CGV Việt Nam sẽ không giải quyết bất kỳ khiếu nại nào liên quan đến điểm thưởng nếu giao dịch sử dụng điểm thưởng đó được thực hiện trực tuyến.
<br />
    CGV Việt Nam sẽ không hoàn và/hoặc giải quyết đối với điểm thưởng đã được sử dụng nếu Khách Hàng không chứng minh được Khách Hàng không phải là người sử dụng điểm thưởng và quyết định của CGV Việt Nam là quyết định cuối cùng.
<br />
    11. Khi mua vé online và thanh toán bằng các hình thức điểm, coupon, voucher, thẻ Premium card, CJ member, thẻ quà tặng, hệ thống sẽ yêu cầu bạn nhập mật mã thanh toán (gồm 06 chữ số, thông tin chi tiết vui lòng truy cập TẠI ĐÂY ).</p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <a href="#two" data-bs-toggle="collapse" className="btn">Quà Tặng Sinh Nhật</a>
                            </div>

                            <div id="two" className="collapse" data-bs-parent="#accordian">
                                <div className="card-body">
                                Chính sách quà tặng sinh nhật cho từng hạng thành viên CGV:
<br />
    - Thân Thiết & U22: 01 CGV Birthday Combo
<br />
    - VIP: 01 CGV Birthday Combo + 01 Vé Xem Phim 2D/3D
<br />
    - VVIP: CGV Birthday Combo + 02 Vé Xem Phim 2D/3D
<br />
    Lưu ý: Vào sinh nhật lần thứ 23, thành viên U22 sẽ nhận thêm 01 vé xem phim 2D/3D bên cạnh CGV Birthday Combo.
<br />
    (*) CGV Birthday Combo = 1 Bắp Ngọt size 44oz + 2 Nước size 22oz
<br />
    Khi đến rạp đổi quà, khách hàng vui lòng xuất trình tài khoản thành viên (Thẻ cứng hoặc tài khoản online trên Ứng dụng CGV) và Giấy tờ tùy thân hoặc giấy tờ khác có thể hiện ngày tháng năm sinh (Bản gốc hoặc ảnh chụp) cho nhân viên rạp để tiến hành xác thực chính chủ tài khoản thành viên. Nhân viên rạp có quyền từ chối yêu cầu đổi quà sinh nhật nếu khách hàng không cung cấp được tài khoản thành viên và/hoặc giấy tờ quy định tại đây hoặc các thông tin Khách Hàng cung cấp không trùng khớp với nhau.
<br />
    Điều Kiện và Điều Khoản
<br />
    CGV Birthday Combo sẽ được hiển thị sẵn trong tài khoản thành viên có sinh nhật trong tháng. Tuy nhiên, để đổi quà sinh nhật, thành viên bắt buộc phải thỏa 01 trong những trường hợp sau:
<br />
    - Trường hợp 1:Thành viên có phát sinh giao dịch mua vé/bắp nước/thẻ quà tặng tại rạp hoặc trên Website/ứng dụng CGV trong vòng 24 tháng gần nhất (không bao gồm tháng sinh nhật của 2 năm trước đó so với tháng sinh nhật trong năm nay) và khách hàng có thể đến rạp đổi quà. Ví dụ: Khách hàng có sinh nhật trong tháng 10/2024. Khách hàng cần phát sinh giao dịch mua vé/bắp nước/thẻ quà tặng tại rạp hoặc trên Website/ứng dụng CGV từ ngày 01/11/2022 đến tháng sinh nhật hiện tại để có thể đến rạp đổi quà.
<br />  
    - Trường hợp 2: Thành viên không có phát sinh giao dịch trong vòng 24 tháng thì thực hiện giao dịch mua vé/bắp nước/thẻ quà tặng tại rạp hoặc trên Website/ứng dụng CGV và có thể đổi quà tại rạp ngay lập tức.
<br />
    - Trường hợp 3: Thành viên đăng ký mới và thực hiện giao dịch mua vé/bắp nước/thẻ quà tặng tại rạp hoặc trên Website/ứng dụng CGV và có thể đổi quà tại rạp ngay lập tức.
<br />
    Cách thức đổi quà sinh nhật:
<br />  
    - Khách hàng vui lòng đổi quà sinh nhật tại quầy ở tất cả các rạp CGV đang hoạt động.
<br />
    - Bên cạnh đó, thành viên chính chủ tài khoản vui lòng xuất trình: (1) CCCD/VNeID/giấy tờ/hình ảnh có thể hiện ngày tháng năm sinh và (2) Thẻ cứng thành viên/Ứng dụng CGV đã đăng nhập tài khoản để đối soát. Nhân viên rạp có quyền từ chối yêu cầu đổi quà sinh nhật nếu khách hàng không cung cấp được tài khoản thành viên và/hoặc giấy tờ quy định tại đây hoặc các thông tin Khách Hàng cung cấp không trùng khớp với nhau.
<br />
    Chi tiết điều khoản:
<br />
    1. Thời hạn sử dụng: Coupon quà sinh nhật chỉ có giá trị sử dụng trong tháng sinh nhật (Sau khi qua tháng mới, coupon sẽ tự động mất đi). Nếu coupon sinh nhật của bạn là vé xem phim, bạn có thể sử dụng để đặt các suất chiếu diễn ra ở tháng kế tiếp, với điều kiện tại thời điểm đặt vé vẫn còn nằm trong tháng sinh nhật.
<br />
    2. Khi nhận quà sinh nhật, chính chủ tài khoản vui lòng xuất trình: (1) CCCD/VNeID/giấy tờ/hình ảnh có thể hiện ngày tháng năm sinh và (2) Thẻ cứng thành viên/Ứng dụng CGV đã đăng nhập tài khoản để đối soát. Thông tin ngày tháng năm sinh trên CMND/CCCD của khách hàng phải trùng khớp với thông tin được sử dụng để đăng ký tài khoản thành viên CGV. Nếu 2 thông tin này không khớp nhau, nhân viên có quyền từ chối trao quà sinh nhật cho khách hàng.
<br />
    3. Để thay đổi thông tin ngày tháng năm sinh của tài khoản thành viên, khách hàng vui lòng mang theo CCCD và ghé rạp CGV gần nhất để được hỗ trợ. (Lưu ý: Mỗi tài khoản chỉ được yêu cầu thay đổi ngày tháng năm sinh tối đa 3 lần.)
<br />
    4. Quà sinh nhật không có giá trị quy đổi thành tiền mặt hoặc hoàn trả lại tiền thừa.
<br />
    5. Sau khi đổi quà sinh nhật tại quầy, khách hàng không được yêu cầu hoàn/hủy/nhận lại coupon quà sinh nhật.
<br />
    6. 01 CGV Birthday Combo bao gồm: 01 Bắp Ngọt size 44oz và 02 Nước ngọt size 22oz, chỉ áp dụng trực tiếp tại quầy. Khi có nhu cầu đổi vị, bạn vui lòng thanh toán thêm khoản phụ thu.
<br />
    7. Khách hàng VVIP vui lòng sử dụng cả 02 coupon vé xem phim trong phần quà tặng sinh nhật khi thực hiện giao dịch (không áp dụng tách lẻ vé cho nhiều giao dịch).
<br />
    8. Mỗi vé xem phim trong combo quà sinh nhật tương đương với 01 vé 2D/3D hàng ghế thường hoặc VIP tại phòng chiếu thường, KHÔNG áp dụng cho các phòng chiếu định dạng đặc biệt (4DX, ULTRA 4DX, IMAX, GOLD GLASS, SWEETBOX, STARIUM, L’AMOUR, PREMIUM, SCREENX, CINE & FORÊT, CINE & LIVING ROOM).
<br />
    9. Vé xem phim trong combo quà sinh nhật được áp dụng cho tất cả các ngày trong tuần bao gồm Lễ/ Tết, KHÔNG áp dụng cho các suất chiếu sớm Sneak Show & Early Release.
<br />
    10. Quá trình phục vụ đổi quà sinh nhật hàng ngày cho khách hàng tại rạp có thể tạm dừng trước thời hạn và không báo trước do phụ thuộc vào số lượng quà tặng thực tế còn lại trong ngày của mỗi rạp.
<br />
    Cách xem thông tin Coupon Sinh nhật tại Web/App CGV:
<br />
    Website: Đăng nhập vào Website cgv.vn → Vào phần “Tài khoản CGV” (là tên khách hàng ở góc phía trên bên phải màn hình) → Chọn mục “Coupon”.
<br />
    App: Mở app CGV → Chọn phần “Thành viên CGV” (là avatar của khách hàng ở góc phía trên bên trái màn hình) → Chọn mục “Thẻ Q.Tặng | Voucher | Coupon” → Chọn “Coupon”.
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <a href="#three" data-bs-toggle="collapse" className="btn">Cấp Độ Thành Viên</a>
                            </div>

                            <div id="three" className="collapse" data-bs-parent="#accordian">
                                <div className="card-body">
                                    <p>Thành viên U22 bao gồm tất cả thành viên CGV nhỏ hơn 23 tuổi trong năm hiện tại. Trong năm 2024, thành viên U22 là thành viên có năm sinh từ 2002 trở về sau và nhận được các ưu đãi sau:

    - Quà tặng sinh nhật: 01 CGV Birthday Combo (01 bắp & 02 nước) miễn phí vào tháng sinh nhật và 01 vé 2D/3D miễn phí vào sinh nhật lần thứ 23, vé miễn phí có hạn sử dụng trong tháng sinh nhật.

    - Chương trình tích lũy điểm thưởng để giảm giá những lần mua sau: Tích lũy điểm 5% giá trị giao dịch tại quầy vé và 3% giá trị giao dịch tại quầy bắp nước.

    - Cơ hội tham gia những chương trình đặc biệt khác chỉ áp dụng cho thành viên U22 CGV.

    - Đặc biệt, từ ngày 18/01/2024, tất cả khách hàng CGV từ 23 tuổi trở xuống (bao gồm cả thành viên U22) sẽ nhận được giá vé đặc quyền chỉ từ 50.000 VND, giá bắp nước chỉ từ 78.000 VND. Chi tiết xem TẠI ĐÂY .

    Để nâng cao bảo mật tài khoản thành viên:

    - Khi thực hiện các giao dịch sử dụng điểm thưởng hoặc vé miễn phí trực tiếp tại rạp, khách hàng vui lòng xuất trình tài khoản thành viên (Thẻ cứng hoặc tài khoản online trên Ứng dụng CGV) và Giấy tờ tùy thân hoặc giấy tờ khác có thể hiện ngày tháng năm sinh (Bản gốc hoặc ảnh chụp) cho nhân viên rạp để tiến hành xác thực chính chủ tài khoản thành viên. Nhân viên rạp có quyền từ chối yêu cầu của khách hàng nếu khách hàng không cung cấp được tài khoản thành viên và/hoặc giấy tờ quy định tại đây hoặc các thông tin Khách Hàng cung cấp không trùng khớp với nhau. Việc thực hiện các giao dịch sử dụng điểm thưởng hoặc vé miễn phí trên website của CGV và/hoặc ứng dụng CGV trên điện thoại luôn được mặc định là được sử dụng bởi chính chủ tài khoản thành viên. Khách Hàng có nghĩa vụ bảo mật tài khoản Thành Viên của mình. CGV Việt Nam sẽ không giải quyết bất kỳ khiếu nại nào liên quan đến điểm thưởng nếu giao dịch sử dụng điểm thưởng đó được thực hiện trực tuyến.
    CGV Việt Nam sẽ không hoàn và/hoặc giải quyết đối với điểm thưởng đã được sử dụng nếu Khách Hàng không chứng minh được Khách Hàng không phải là người sử dụng điểm thưởng và quyết định của CGV Việt Nam là quyết định cuối cùng.

    - Khi mua vé online và thanh toán bằng các hình thức điểm, coupon, voucher, thẻ Premium card, CJ member, thẻ quà tặng, hệ thống sẽ yêu cầu bạn nhập mật mã thanh toán (gồm 06 chữ số, thông tin chi tiết vui lòng truy cập TẠI ĐÂY ).</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <a href="#four" data-bs-toggle="collapse" className="btn">Quản Lý Tài Khoản</a>
                            </div>

                            <div id="four" className="collapse" data-bs-parent="#accordian">
                                <div className="card-body">
                                Đăng nhập vào Tài Khoản CGV, bạn có thể dễ dàng quản lý tài khoản thành viên của mình như:
<br />
    - Kiểm tra và chỉnh sửa thông tin tài khoản.
<br />
    - Tra cứu điểm thưởng, tổng chi tiêu và lịch sử giao dịch.
<br />
    - Kiểm tra thẻ quà tặng, voucher hoặc coupon hiện có trong tài khoản thành viên.
<br />
    Mỗi tuần, các thành viên sẽ nhận được Bản tin điện ảnh CGV qua email, cập nhật những tin tức mới nhất về phim ảnh, sự kiện và khuyến mãi. Cập nhật ngay email, điện thoại và địa chỉ của bạn để luôn nhận được những thông báo mới nhất từ CGV!
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <a href="#five" data-bs-toggle="collapse" className="btn">Bạn Cần Hỗ Trợ</a>
                            </div>

                            <div id="five" className="collapse" data-bs-parent="#accordian">
                                <div className="card-body">
                                    <p>Với những ưu đãi hấp dẫn từ chương trình thành viên, CGV hy vọng sẽ mang đến cho bạn những trải nghiệm vượt xa điện ảnh.

    Mọi thắc mắc về chương trình thành viên bạn có thể liên hệ ngay Bộ phận hỗ trợ khách hàng của chúng tôi qua email hoidap@cgv.vn hoặc hotline 1900 6017 (8:00 – 22:00, từ thứ Hai đến Chủ Nhật - bao gồm các ngày Lễ, Tết).

    Cảm ơn bạn đã luôn đồng hành cùng CGV!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}