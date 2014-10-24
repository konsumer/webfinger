# webfinger

webfinger protocol lib for diaspora with node.js

## Install

`npm install konsumer/webfinger`

## Use

```javascript
var webfinger = require('webfinger');
webfinger('konsumer@diasp.org',function(err, info){
  if (err) throw err;
  console.log(info);
});
```

This will give you something like this:

```json
{
  "hcard": "https://diasp.org/hcard/users/a01080e02773013222b000259069449e",
  "seed_location": "https://diasp.org/",
  "guid": "a01080e02773013222b000259069449e",
  "profile": "https://diasp.org/u/konsumer",
  "atom": "https://diasp.org/public/konsumer.atom",
  "pubkey": "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFxNXZDYXN6MmtBUFAvRkJNeEkwUQpxbTMxWEtuUFF1VDZIYkYxcmYzNG1ZUHk2VDRzWDdrM094YUpocGVSek1GdlI3TnRzd00rTDhFTUVJbEhUTUJFCkgxakoraENqaVNlNjk1cVNqYzJtZlNzaWQ2U0VpRVFqamVidVczQVEwWnBnOUx2MjdtYjlEdXM1R1JidnZPVnQKc0VTQmMvVW16SUJpSUV6K3NnT0dPd290dFQ4dHVmTG5POE9JZHBPODJUa3RjSUJ0UDRpekp0WUZDKzYzb3lHRApmRDNMNm9aZTdpeDg1UjNCa0hTeVFueHZ4ayt5UU5MbEZJK1o5bHl5UTdrRm9NeHFuV2ZpdFplQkVZdDNzbUkrClVucUVFQVhZR3UvbDE5Y3ltRFIrMkIxN3VwTFNveEc1aFNIQzJnQy9iM1BTQmorUTZHZVliZm5aVHUyV3YzSDYKSjd6OGk5SEkwUHVMalowQndBRmFkSXZydkVYMUllVE0wMUVXYU9SK1hqNk1MbkoraFEyL1dxaGt4cGRqN0t5cgpQKzYyNWZhS2lkbGllclFOcE1GQ0tMdXBvaG8waUpiZHBZZjhKVE9ERFNoN3lNMWJOQ3pRcUZPMmVVMTBkd3ZiCmsycW11Qk56Y3JOTDZ0cFZUazhHVWxsNHJIVEk1WFdQL2VZNkZ0MnlHSTFyeDJPK3RFaFNodjRBdWNMdnBXTnkKazNQeEE2TmE4a3JaYUZMYk1xdTN4VWhBSEgvVk0wdUlZcy9RRGRLcTZrTmRaK1dZUDVhY28zTks4aEM3K1lrSwpUVVl0REU4NW45TVR5K3krQ2ZRMHh3MTdtUDFoeG1uM09NMlZVRG93KzI2R2dULzR2OFVBWnhCUjBCMXBBZ01hCk84a2hlVmU4UXVKZXI4Zm53T3BiYlM4Q0F3RUFBUT09Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQo="
}
```
