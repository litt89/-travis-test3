// :created, :received, :started, :passed, :failed, :errored, :canceled
value = `[{"id":233766348,"repository_id":20376766,"commit_id":584581602,"number":"14","event_type":"push","state":"passed","started_at":"2021-07-27T12:11:46Z","finished_at":"2021-07-27T12:13:03Z","duration":77,"job_ids":[527120993]},{"id":233671850,"repository_id":20376766,"commit_id":584047400,"number":"13","event_type":"push","state":"passed","started_at":"2021-07-26T13:47:15Z","finished_at":"2021-07-26T13:48:30Z","duration":75,"job_ids":[526876708]},{"id":233669311,"repository_id":20376766,"commit_id":584031381,"number":"12","event_type":"push","state":"errored","started_at":"2021-07-26T13:20:38Z","finished_at":"2021-07-26T13:21:00Z","duration":22,"job_ids":[526870871]},{"id":233663388,"repository_id":20376766,"commit_id":583994022,"number":"11","event_type":"push","state":"errored","started_at":"2021-07-26T12:08:01Z","finished_at":"2021-07-26T12:08:23Z","duration":22,"job_ids":[526856422]},{"id":233663011,"repository_id":20376766,"commit_id":583993172,"number":"10","event_type":"push","state":"canceled","started_at":null,"finished_at":"2021-07-26T12:06:46Z","duration":0,"job_ids":[526855990]},{"id":233662874,"repository_id":20376766,"commit_id":583991976,"number":"9","event_type":"push","state":"passed","started_at":"2021-07-26T12:04:44Z","finished_at":"2021-07-26T12:06:00Z","duration":76,"job_ids":[526855668]},{"id":233661407,"repository_id":20376766,"commit_id":583981967,"number":"8","event_type":"push","state":"passed","started_at":"2021-07-26T11:41:44Z","finished_at":"2021-07-26T11:43:02Z","duration":78,"job_ids":[526852156]},{"id":233661378,"repository_id":20376766,"commit_id":583981773,"number":"7","event_type":"push","state":"passed","started_at":"2021-07-26T11:41:23Z","finished_at":"2021-07-26T11:42:40Z","duration":77,"job_ids":[526852105]},{"id":233660444,"repository_id":20376766,"commit_id":583975444,"number":"6","event_type":"push","state":"canceled","started_at":"2021-07-26T11:26:28Z","finished_at":"2021-07-26T11:26:40Z","duration":12,"job_ids":[526849688]},{"id":233659641,"repository_id":20376766,"commit_id":583970019,"number":"5","event_type":"push","state":"passed","started_at":"2021-07-26T11:15:15Z","finished_at":"2021-07-26T11:16:31Z","duration":76,"job_ids":[526847984]},{"id":233659253,"repository_id":20376766,"commit_id":583967537,"number":"4","event_type":"push","state":"errored","started_at":"2021-07-26T11:10:36Z","finished_at":"2021-07-26T11:11:00Z","duration":24,"job_ids":[526847198]},{"id":233658132,"repository_id":20376766,"commit_id":583959848,"number":"3","event_type":"push","state":"passed","started_at":"2021-07-26T10:52:20Z","finished_at":"2021-07-26T10:53:35Z","duration":75,"job_ids":[526844544]},{"id":233503155,"repository_id":20376766,"commit_id":583080841,"number":"2","event_type":"push","state":"passed","started_at":"2021-07-23T10:02:23Z","finished_at":"2021-07-23T10:03:40Z","duration":77,"job_ids":[526409032]},{"id":233502811,"repository_id":20376766,"commit_id":583078177,"number":"1","event_type":"push","state":"canceled","started_at":"2021-07-23T09:56:51Z","finished_at":"2021-07-23T10:00:23Z","duration":212,"job_ids":[526408110]}]`

// if (JSON.parse(value).duration) {
//    return JSON.parse(value).duration
// } else {
//    return 0
// }

result = JSON.parse(value).filter(function (e) { return e.duration != "0" });
var duration = 0;
for (i in result) {
   duration += result[i].duration;
}
return Math.round(duration / result.length)


// console.log(JSON.stringify(result))

// // return JSON.stringify(result)