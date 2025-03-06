<?
	function latest_article($table, $loop, $char_limit, $char_limit_con)	// 테이블명, 노출갯수, 글자수
	{
		include "dbconn.php";

		$sql = "select * from $table order by num desc limit $loop";
		$result =  mysqli_query( $connect, $sql);

		while ($row = mysqli_fetch_array($result))
		{
			$num = $row[num];
			$len_subject = mb_strlen($row[subject], 'utf-8');	// 한글도 1자로 처리, 제목의 총 글자 수
			$subject = $row[subject];
			$len_content = mb_strlen($row[content], 'utf-8');
			$content = $row[content];

			if ($len_subject > $char_limit)	// 제한글자수보다 크면
			{
				// $subject = str_replace( "&#039;", "'", $subject);
				$subject = mb_substr($subject, 0, $char_limit, 'utf-8');
				$subject = $subject."...";
			}

			if ($len_content > $char_limit_con)	// 제한글자수보다 크면
			{
				// $subject = str_replace( "&#039;", "'", $subject);
				$content = mb_substr($content, 0, $char_limit_con, 'utf-8');
				$content = $content."...";
			}
			
			$regist_day = substr($row[regist_day], 0, 10);	// '2022-02-21'

			if($table=='greet'){
				echo"
					<li class='community_box1'  data-aos='zoom-in-right'>
						<h4>&Lt; 공지사항</h4>
						<img class='icon1' src='./images/communiny_icon.svg' alt=''>
						<dl>
							<dt>[동화약품] 신입 및 경력사원 모집</dt>
							<dd class='community_con1'>&middot;입사지원서 : 당사 홈페이지에서 온라인으로 지원바랍니다.<br>
									&middot;경력기술서 : 경력이 있는 입사지원자는 입사지원서 작성시 
									&emsp;&emsp;&emsp;자유 양식으로 작성하여 첨부 파일로 등록바랍니다.<br>
									&middot;기타 서류는 서류전형 합격자에 한하여 면접전형시 지참바랍니다.</dd>
						</dl>
						<a class='more4' href='./$table/view.php?table=$table&num=$num'>자세히 보기   +</a>
					</li>
				";
			}

            if($table=='news'){
				if($row[file_copied_0]){	//	첨부된 이미지가 있으면
					 		$newsimg='./news/data/'.$row[file_copied_0];
					 	}else{
					 		$newsimg= './news/data/default.jpg';
					}
						echo " <li class='community_box2' data-aos='zoom-in-up'>
                                <h4>&Lt; 동화뉴스</h4>
                                <img class='icon2' src='./images/communiny_icon.svg' alt=''>
                                <dl>
                                    <dt><img src='./images/community01.jpg' alt=''></dt>
                                    <dd class='community_con2'>> 후시다인 더마 포어 4D콜라겐 랩핑 마스크, 올리브영 1위 등극</dd>
                                </dl>
                                <a class='more5' href='./$table/view.php?table=$table&num=$num'>자세히 보기   +</a>
							</li>
						";

			}

			if($table=='adver'){
				if($row[file_copied_0]){	//	첨부된 이미지가 있으면
					 		$adverimg='./adver/data/'.$row[file_copied_0];
					 	}else{
					 		$adverimg= './adver/data/default.jpg';
					}
						echo " <li class='community_box3'  data-aos='zoom-in-left'>
                                <h4>&Lt; 동화광고</h4>
                                <img class='icon3' src='./images/communiny_icon.svg' alt=''>
                                <dl>
                                    <dt><img src='./images/community02.jpg' alt=''></dt>
                                    <dd class='community_con2'>> 부채표 활명수 TVC 15초</dd>
                                </dl>
                                <a class='more6' href='./$table/view.php?table=$table&num=$num'>자세히 보기   +</a>
							</li>
						";

			}
			
			// if($table=='greet'){		// 공지사항 table

			// 	echo "      
			// 		<li>
			// 			<a href='./$table/view.php?table=$table&num=$num'>
			// 				$subject <span>$regist_day</span>
			// 			</a>
			// 		</li>
			// 	";    
			// }


			
			// if($table=='concert'){		// 콘서트 table

			// 	if($row[file_copied_0]){	//	첨부된 이미지가 있으면
			// 		$concertimg='./concert/data/'.$row[file_copied_0];
			// 	}else{
			// 		$concertimg= './concert/data/default.jpg';
			// 	}

			// 	echo "      
			// 		<li>
			// 			<a href='./$table/view.php?table=$table&num=$num'>
			// 			    <img src='$concertimg'>
			// 				<dl>
			// 					<dt>$subject</dt>
			// 					<dd>
			// 						$content
			// 						<span>$regist_day</span>
			// 					</dd>
			// 				</dl>
			// 			</a>
			// 		</li>
			// 	";    
			// }
			
		}
		mysqli_close($connect); 
	}
?>