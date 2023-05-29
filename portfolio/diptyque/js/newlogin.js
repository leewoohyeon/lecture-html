//전체동의
function selectAll(selectAll) {
  const checkbox = document.getElementsByName("agreement");
  checkbox.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}

//핸드폰번호(자동하이픈소스)
const autoHyphen2 = (target) => {
  target.value = target.value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(\-{1,2})$/g, "");
};

$(document).ready(function () {
  const form = $("#signup-form");
  const usernameInput = $("#username");
  const emailInput = $("#email");
  const passwordInput = $("#password");
  const confirmPasswordInput = $("#confirm-password");
  const secretkey = 230328;
  //핸드폰 인증번호 받기
  $(".secretkey").on("click", function () {
    if ($("#tel").val().trim() === "") {
      alert("핸드폰 번호를 입력해주세요");
    } else if ($("#tel").val().length < 13) {
      alert("핸드폰 번호를 다시 입력주세요");
    } else {
      alert("인증번호가 전송되었습니다 " + secretkey);
    }
  });
  //일수가 30일 이상의 값을 적었을때
  $("#date_oneday").on("input", function () {
    console.log($(this).val());
    if (Number($(this).val()) > 30) {
      alert("잘못된 값입니다.");
      $(this).val("");
    }
  });

  form.submit(function (event) {
    event.preventDefault(); // 폼 제출 방지

    // 유효성 검사
    if(!$("input:checked[Name=agreement]").eq(0).is(":checked")){
      alert("필수 값을 모두 동의해주세요");
      return;
    }

    if(!$("input:checked[Name=agreement]").eq(1).is(":checked")){
      alert("필수 값을 모두 동의해주세요");
      return;
    }

    if (emailInput.val().trim() === "") {
      alert("ID 또는 Email을 입력해주세요.");
      return;
    }

    if (!isValidEmail(emailInput.val())) {
      alert("유효한 형식이 아닙니다.");
      return;
    }

    if (passwordInput.val().trim() === "") {
      alert("Password를 입력해주세요.");
      return;
    }

    if (!isValidPassword(passwordInput.val())) {
      alert(
        "Password는 영문, 숫자, 특수문자를 포함하여 8자 이상으로 입력해주세요."
      );
      return;
    }

    if (confirmPasswordInput.val().trim() === "") {
      alert("비밀번호 확인창을 입력해주세요.");
      return;
    }

    if (passwordInput.val() !== confirmPasswordInput.val()) {
      alert("비밀번호와 비밀번호 확인 값이 일치하지 않습니다.");
      return;
    }

    if (usernameInput.val().trim() === "") {
      alert("이름을 입력해주세요.");
      return;
    }

    if ($("#date_year").val().trim() === "") {
      alert("생년 값을 입력해주세요");
      return;
    }

    if ($("#date_month").val() === "") {
      alert("월을 선택해주세요");
      return;
    }

    if ($("#date_oneday").val() === "") {
      alert("일을 입력해주세요");
      return;
    }

    if ($("#gender").val() === "") {
      alert("성별을 선택해주세요");
      return;
    }

    if ($("#tel").val() === "") {
      alert("핸드폰 번호를 입력해주세요");
      return;
    }

    if ($(".secretkey_text").val() === "230328") {
      // alert("인증되었습니다")
    } else {
      alert("인증번호가 잘못되었습니다");
      return;
    }

    // 유효성 검사 통과
    alert("회원가입이 완료되었습니다.");
    // form[0].reset(); // 폼 초기화
    location.href = "./main.html";
  });

  // Email 유효성 검사 함수
  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  // Password 유효성 검사 함수
  function isValidPassword(password) {
    // 영문, 숫자, 특수문자를 모두 포함하는지 검사
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  }
});

// trim() 따옴표 앞뒤에 있는 공백을 없애주는 메서드
