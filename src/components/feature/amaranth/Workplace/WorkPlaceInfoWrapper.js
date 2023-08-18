import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { ButtonW, DetailTitle, SelectBox } from "../../../common/Index";
import "react-datepicker/dist/react-datepicker.css";
const WorkPlaceInfoWrapper = () => {
  const [openDate, setOpenDate] = useState(null); // 개업일 선택 상태 관리
  const [closeDate, setCloseDate] = useState(null); // 폐업일 선택 상태 관리

  // 개업일 선택 시 처리 함수
  const handleOpenDateChange = (date) => {
    setOpenDate(date);
  };

  // 폐업일 선택 시 처리 함수
  const handleCloseDateChange = (date) => {
    setCloseDate(date);
  };

  return (
    <div className="selectListWrapper">
      <table className="tableStyle">
        <tbody>
          <tr>
            <th className="headerCellStyle">회사선택</th>
            <td className="cellStyle"></td>
            <th className="headerCellStyle">본점여부</th>
            <td className="cellStyle">
              <input
                className="radioStyle"
                type="radio"
                name="location"
                value="본점"
              />{" "}
              본점
              <input
                className="radioStyle"
                type="radio"
                name="location"
                value="지점"
              />{" "}
              지점
            </td>
          </tr>
          <tr>
            <th className="headerCellStyle">사업장코드</th>
            <td className="cellStyle">사업장이야</td>
            <th className="headerCellStyle">사용여부</th>
            <td className="cellStyle">
              <input
                className="radioStyle"
                type="radio"
                name="status"
                value="사용"
              />{" "}
              사용
              <input
                className="radioStyle"
                type="radio"
                name="status"
                value="미사용"
              />{" "}
              미사용
            </td>
          </tr>
          <tr>
            <th className="headerCellStyle">사업장명</th>
            <td colSpan="3" className="cellStyle">
              <input type="text" className="reqInputStyle" />
            </td>
          </tr>
          <tr>
            <th className="headerCellStyle">사업장 약칭</th>
            <td className="cellStyle">
              <input
                type="text"
                className="inputStyle"
                // placeholder={workplaceData[1].div_NMK}
              />
            </td>
            <th className="headerCellStyle">조작도표시</th>
            <td className="cellStyle">
              <input
                className="radioStyle"
                type="radio"
                name="display"
                value="표시"
              />{" "}
              표시
              <input
                className="radioStyle"
                type="radio"
                name="display"
                value="미표시"
              />{" "}
              미표시
            </td>
          </tr>
          <tr>
            <th className="headerCellStyle">업태</th>
            <td className="cellStyle">
              <input
                type="text"
                className="reqInputStyle"
                // placeholder={workplaceData[1].business}
              />
            </td>
            <th className="headerCellStyle">종목</th>
            <td className="cellStyle">
              <input
                type="text"
                className="reqInputStyle"
                // placeholder={workplaceData[1].jongmok}
              />
            </td>
          </tr>
          <tr>
            <th className="headerCellStyle">대표전화</th>
            <td className="cellStyle">
              <input
                type="text"
                className="inputStyle"
                // placeholder={workplaceData[1].div_TEL}
              />
            </td>
            <th className="headerCellStyle">대표팩스</th>
            <td className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
          </tr>
          <tr>
            <th className="headerCellStyle">사업자번호</th>
            <td className="cellStyle">
              <input
                type="text"
                className="inputStyle"
                // placeholder={workplaceData[1].reg_NB}
              />
            </td>
            <th className="headerCellStyle">법인번호</th>
            <td className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
          </tr>
          <tr>
            <th className="headerCellStyle">개업일</th>
            <td className="cellStyle">
              <DatePicker
                selected={openDate}
                onChange={handleOpenDateChange}
                dateFormat="yyyy-MM-dd"
                className="inputStyle"
              />
            </td>
            <th className="headerCellStyle">폐업일</th>
            <td className="cellStyle">
              <DatePicker
                selected={closeDate}
                onChange={handleCloseDateChange}
                dateFormat="yyyy-MM-dd"
              />
            </td>
          </tr>
          <tr>
            <th className="headerCellStyle">대표자명</th>
            <td className="cellStyle">
              <input
                type="text"
                className="reqInputStyle"
                // placeholder={workplaceData[1].mas_NM}
              />
            </td>
            <th className="headerCellStyle">관할세무서</th>
            <td className="cellStyle">
              <input
                type="text"
                className="reqInputStyle"
                placeholder="추가필요"
              />
            </td>
          </tr>
          <tr>
            <th className="headerCellStyle" rowSpan="2">
              사업장주소
            </th>
            <td colSpan="3" className="cellStyle">
              <input
                type="text"
                style={{
                  border: "1px solid #ccc",
                  height: "26px",
                  background: "#fef4f4",
                }}
              />
              <ButtonW data={"우편번호"}></ButtonW>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="cellStyle">
              <input
                type="text"
                className="reqInputStyle"
                // placeholder={workplaceData[1].div_ADDR}
              />
            </td>
            <td className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
          </tr>

          <tr>
            <th className="headerCellStyle">정렬</th>
            <td colSpan="3" className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div>
        <DetailTitle detailTitle={"신고 관련 정보"}></DetailTitle>
      </div>
      <table className="tableStyle">
        <tbody>
          <tr>
            <th className="headerCellStyle"> 주업종코드</th>
            <td colSpan="3" className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
          </tr>
          <tr>
            <th className="headerCellStyle">
              지방세신고지
              <br />
              (행정동)
            </th>
            <td className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
            <th className="headerCellStyle">
              지방세신고지
              <br />
              (법정동)
            </th>
            <td className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
          </tr>
          <tr>
            <th className="headerCellStyle">전자신고ID</th>
            <td className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
            <th className="headerCellStyle">주류코드</th>
            <td className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
          </tr>
          <tr>
            <th className="headerCellStyle" rowSpan="2">
              전자신고용주소
            </th>
            <td colSpan="3" className="cellStyle">
              <input
                type="text"
                className="inputStyle"
                style={{
                  border: "1px solid #ccc",
                  height: "26px",
                  width: "120px",
                }}
              />
              <ButtonW data={"우편번호"}></ButtonW>
              <SelectBox
                className="inputStyle"
                style={{ verticalAlign: "middle" }}
              />
              <input
                type="text"
                className="inputStyle"
                style={{
                  border: "1px solid #ccc",
                  height: "26px",
                  width: "120px",
                  marginLeft: "10px",
                }}
              />
              <input
                type="text"
                className="inputStyle"
                style={{
                  border: "1px solid #ccc",
                  height: "26px",
                  width: "120px",
                  marginLeft: "10px",
                }}
              />
              <input
                type="text"
                className="inputStyle"
                style={{
                  border: "1px solid #ccc",
                  height: "26px",
                  width: "120px",
                  marginLeft: "10px",
                }}
              />
            </td>
          </tr>

          <tr>
            <td colSpan="2" className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
            <td className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
          </tr>
          <tr>
            <th className="headerCellStyle">신고용대표번호</th>
            <td className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
            <th className="headerCellStyle">신고용휴대전화</th>
            <td className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
          </tr>
          <tr>
            <th className="headerCellStyle"> Email</th>
            <td colSpan="3" className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <div>
        <DetailTitle detailTitle={"인감 정보"}></DetailTitle>
      </div>
      <table className="tableStyle">
        <tbody>
          <tr>
            <th className="headerCellStyle"> 발신명의</th>
            <td colSpan="3" className="cellStyle">
              <input type="text" className="inputStyle" />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table className="tableStyle2">
        <thead>
          <tr className="headerRowStyle">
            <th className="cellStyle2">법인인감</th>
            <th className="cellStyle2">사용인감</th>
            <th className="cellStyle2">사업장직인</th>
            <th className="cellStyle3">양식로고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="imageCellStyle">
              <img src="" alt="Image 1" />
            </td>
            <td className="imageCellStyle">
              <img src="" alt="Image 2" />
            </td>
            <td className="imageCellStyle">
              <img src="" alt="Image 3" />
            </td>
            <td className="imageCellStyle">
              <img src="" alt="Image 4" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorkPlaceInfoWrapper;
