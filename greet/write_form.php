<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

	//$liststyle = $_GET['liststyle']; (get)
?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>인재채용-채용공고</title>
	<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" integrity="sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link rel="stylesheet" href="../common/css/aos.css">
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/sub5common.css">
    <link rel="stylesheet" href="./css/greet.css">
    <script src="../common/js/prefixfree.min.js"></script>
	<script>
		function del(href) 
		{
			if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
					document.location.href = href;
			}
		}
	</script>
</head>

<body>
	<div class="skipNav">
        <a href="#content">본문 바로가기</a>
        <a href="#gnb">글로벌 네비게이션 바로가기</a>
    </div>
	<div class="wrap">
		<? include '../common/sub_header.html' ?>
		<div class="visual">
            <strong>인재채용</strong>
        </div>
        <div class="sub_nav">
            <ul>
                <li><a href="../sub6/sub6_1.html">채용안내</a></li>
                <li><a  class="current" href="./list.php">채용공고</a></li>
                <li><a href="../sub6/sub6_2.html">채용 Q&A</a></li>
            </ul>
        </div>
        <article id="content">
		<div class="title_area">
                <div class="line_map">
                    <i class="fa-solid fa-house"></i> > 인재채용 > <strong> 채용공고</strong>
                </div>
                <div><p>notice of employment</p></div>
                <h2>채 용 공 고</h2>
            </div>
			<div class="content_area">
               	<div class="bbs_wrap">
					<form  name="board_form" method="post" action="insert.php?liststyle=<?=$liststyle?>">
						<ul class="bbs_write_top">
							<li>
								<dl>
									<dt>닉네임</dt>
									<dd><?=$usernick?></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="subject">제목</label></dt>
									<dd><input type="text" id="subject" name="subject" required></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="contents">내용</label></dt>
									<dd>
										<div class="check">
											<input type="checkbox" name="html_ok" id="html_ok" value="y">
											<label for="html_ok">HTML 쓰기</label>
										</div>
										<div>
											<textarea name="contents" id="contents" required></textarea>
										</div>
									</dd>
								</dl>
							</li>
						</ul>
						<div class="btn_wrap">
							<a href="list.php?page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
							<button type="submit" class='active'>저장</button>
						</div>
					</form>
				</div>
			</div>
        </article>
		<? include '../common/sub_footer.html' ?>
	</div>
</body>
<script src="../common/js/jquery-1.12.4.min.js"></script>
<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
<script src="../common/js/jquery.easing.1.3.js"></script>
<script src="../common/js/common.js"></script>
<script src="../common/js/select.js"></script>
</html>