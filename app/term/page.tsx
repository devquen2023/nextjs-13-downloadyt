
import Link from "next/link";
import styles from "./Term.module.css"
import {memo} from 'react'


const Term = memo(function Term() {
    return (<div className={styles?.termContainer}>
        <div>
        <h2>Điều khoản dịch vụ:</h2>
        <p>Vui lòng đọc kỹ điều khoản dịch vụ trước khi sử dụng sản phẩm </p>
         <h4>1, Bản Quyền</h4>
         <p>Đây là dịch vụ tải video từ Youtube có bảo vệ bản quyền nội dung, bạn chỉ được lưu trữ trên điện thoại để xem và
         Bạn không được phép phân phối nội dung nghe nhìn lên bất kỳ nền tảng nào khi nó không thuộc quyền sở hữu của bạn </p>
         <p>Bạn cam kết rằng : Nếu như bạn phân phối bất kỳ nội dung nghe nhìn nào thông qua dịch vụ tải video của chúng tôi lên các nền tảng khác,
            thì bạn phải chịu trách nhiệm hoàn toàn trước pháp luật
         </p>
         <h4>2, Cam kết bảo mật thông tin: </h4>
         <p>Chúng tôi sử dụng phương thức truyền tin : https để mã hóa và Chúng tôi cam kết không thu thập bất cứ thông tin nào của người dùng,
             chúng tôi chỉ sử dụng cookie để phục vụ cho trải nghiệm website</p>
             <h4>3, Thắc mắc:</h4>
        <p>Nếu bạn có thắc mắc gì, vui lòng liên hệ trung tâm bản quyền </p>
        <p>Email:copyright@youtube.com | copyright@phuongmychi.vn</p>
        <h5>Trân trọng cảm ơn bạn đã sử dụng sản phẩm và dịch vụ của chúng tôi.</h5>   
        <Link style={{textDecoration:'none'}} href={"/"}>Trang chủ</Link>
        </div>
      
    </div>);
  });
  
  export default Term;