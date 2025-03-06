<?
    session_start();
    //$userid = $_SESSION[id]; //각 필드에 저장되어 있는 id 값
    //$username = $_SESSION[name];
    //$usernick = $_SESSION[nick];
    //$userlevel = $_SESSION[level];

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>
<meta charset="utf-8">
<?
    include "../lib/dbconn.php"; 

    $sql = "delete form member where id='$userid'";
    //$sql .= "nick='$nick', hp='$hp', email='$email', regist_day='$regist_day' where id='$userid'";

    mysqli_query( $connect, $sql);  // $sql 에 저장된 명령 실행

    unset($_SESSION['userid']);
    unset($_SESSION['username']);
    unset($_SESSION['usernick']);
    unset($_SESSION['userlevel']);
    
    mysqli_close($connect);

    echo("
        <script>
            alert('회원탈퇴가 완료되었습니다.');
            location.href = '../index.html'; 
        </script>
    ");
    



?>