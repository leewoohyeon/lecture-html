//전체동의
function selectAll(selectAll) {
  const radioButtons = document.getElementsByClassName("agreementRadio");
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = selectAll.checked;
  }
}
//핸드폰번호(자동하이픈소스)
const autoHyphen2 = (target) => {
  target.value = target.value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(\-{1,2})$/g, "");
};

//select box 제어
function selectOption(value) {
  var selectBox = document.getElementById('select_box');
  selectBox.value = value;
}

$(document).ready(function () {
  const form = $("#form_box");
  const nameInput = $("#user_name");
  const phnumberInput = $("#ph_number");
  const emailInput = $("#user_email");

  form.submit(function (event) {
    event.preventDefault(); // 폼 제출 방지

    // 유효성 검사
    const applykind = $("input:radio[Name=consulting]");
    if (!applykind.is(":checked")) {
      alert("상담 신청 유형을 선택해주세요");
      return;
    }

    if($('#select_box option:selected').val() ===''){
      alert("차량 모델을 선택해주세요.");
      return;
    }

    if (nameInput.val().trim() === "") {
      alert("이름을 입력해주세요.");
      return;
    }

    if (phnumberInput.val().trim() === "") {
      alert("연락처를 입력해주세요.");
      return;
    }

    if (emailInput.val().trim() === "") {
      alert("Email을 입력해주세요.");
      return;
    }

    if (!isValidEmail(emailInput.val())) {
      alert("유효한 형식이 아닙니다.");
      return;
    }

    // Email 유효성 검사 함수
    function isValidEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }

    // 체크박스 유효성 검사:필수값
    const requiredRadio = $("input:radio.required_value");

    if (!requiredRadio.eq(0).is(":checked")) {
      alert("필수 값에 동의해주세요");
      return;
    }
    if (!requiredRadio.eq(1).is(":checked")) {
      alert("필수 값에 동의해주세요");
      return;
    }
    // 체크박스 유효성 검사:선택값
    const chioceRadio = $("input:radio[Name=marketing_check]");
    if (!chioceRadio.is(":checked")) {
      alert(" 마케팅 목적의 수집 및 이용 여부에 체크해주세요");
      return;
    }

    const chioceRadio2 = $("input:radio[Name=ad_check]");
    if (!chioceRadio2.is(":checked")) {
      alert("광고성 정보 수신 동의 여부에 체크해주세요");
      return;
    }

    // 유효성 검사 통과
    location.href = "./index.html";
  });
});
