$(document).ready(function () {
  const form = $("#login");
  const form2 = $("#non-member_login");
  const emailInput = $("#user_id");
  const passwordInput = $("#user_pw");

  form.submit(function (event) {
    event.preventDefault(); // 폼 제출 방지

    // 유효성 검사

    if (emailInput.val().trim() === "") {
      alert("ID 또는 Email을 입력해주세요.");
      return;
    }

    if (!isValidEmail(emailInput.val())) {
      alert("유효한 형식이 아닙니다.");
      return;
    }

    if (passwordInput.val().trim() === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    // if (!isValidPassword(passwordInput.val())) {
    //   alert("잘못된 비밀번호 입니다.");
    //   return;
    // }

    // 유효성 검사 통과
    location.href = "./main.html";
  });

  form2.submit(function (event) {
    event.preventDefault(); // 폼 제출 방지

    if ($("#non-member_name").val() === "") {
      alert("주문자의 이름을 입력해주세요.");
      return;
    }

    if ($("#non-member_number").val().trim() === "") {
      alert("주문번호 12자리를 입력해주세요.");
      return;
    }

    if($("#non-member_pw").val().trim() === "") {
      alert("비회원주문 비밀번호를 입력해주세요");
      return;
    };  

      // 유효성 검사 통과
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
