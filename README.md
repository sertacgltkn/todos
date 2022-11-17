<h1 target="_blank"><a href="https://sertacgultekin-week2-task.netlify.app" >---NETLİFY DEPLOY LİNK---</a></h1>



## Sıralama ödevi algoritması
##### todos.js dosyası içerisinde düzenlenecek.
table thead kısmındaki sıralama yapılacak kolonlara event listener eklenecek.
event listener hangi kolon için tıklanıyorsa sort metodu kullanılarak sıralama yapılacak.
sıralanmış todos'todus içerisine atılacak.
renderTodos metodu çalıştırılacak.


## HTTP - Fetch Api Ödevi

##### README.md dosyası, txt, js dosyası açarak yapılabilir.

* HTTP Status'ün 
  * Görevleri nelerdir? Bu görevlerin anlamlarını açıklayınız.
   
* HTTP Request'in metodlari  nelerdir? 
  
*  Fetch API'nin metodlari ile örnekleri

<!-------------------------------------------------------------->

<br><br><br>

# <li> ***HTML STATUS CODES***

-Sunucu ve istemci arasındaki aktarım işleminin durumunu bildirir. (hem hatalı hem başarılı olanları)

 ### **1xx: Information**

 -Kullanıcı yani tarayıcının gönderdiği isteğin sunucuya ulaştığını ve istek ile ilgili işlemin başlamış olduğunu bildiren HTTP durum kodları sınıfıdır. Bu sınıftaki kodlar şunlardır:

100 - Devam <br>
101 - Protokol değiştirme <br>
102 - İşlem

 ### **2xx: Successful**

-İstemciden gelen talebin sunucuya ulaştığını, sunucu tarafından anlaşıldığını ve başarılı olduğunu ifade eden kodları içeren sınıftır. Bu sınıftaki kodlar şöyledir:

200 - Başarılı/Tamam <br>
201 - Oluşturuldu <br>
202 - Kabul edildi/Onaylandı <br>
203 - Yetersiz bilgi <br>
204 - İçerik yok <br>
205 - İçeriği baştan al <br>
206 - Kısmi içerik <br>
207 - Çoklu statü <br>
210 - Farklı içerik

### **3xx: Redirection**

-Bir yönlendirme söz konusu olduğunda gösterilen ve ulaşılmak istenen bilginin, başka bir kaynağa taşındığını bildiren HTTP durum kodlarından oluşan sınıftır. 3xx sınıfındaki kodlar şu şekilde sıralanabilir:

300 - Çoklu seçenek<br>
301 - Kalıcı yönlendirme<br>
302 - Geçici yönlendirme<br>
303 - Diğerlerine bak<br>
304 - Güncellenmemiş/Değiştirilmemiş<br>
305 - Proxy kullan<br>
307 - Geçici olarak yeniden yönlendirme


### **4xx: Client Error**

-Tarayıcı tarafından gönderilen isteğe konu olan web sitesine ya da sayfaya ulaşılamadığında gösterilen ve isteğin yerine getirilemediğini ifade eden HTTP durum kodları, bu sınıfa dâhildir. 4xx sınıfındaki kodlar şöyle sıralanmaktadır:

400 - Kötü/Hatalı istek<br>
401 - Yetkisi<br>
402 - Ödeme gerekli<br>
403 - Yasaklandı/Erişim izni sorunu<br>
404 - Bulunamadı<br>
405 - İzin verilmeyen yöntem<br>
406 - Kabul edilemez<br>
407 - Proxy üzerinden yetkilendirme gerekli<br>
408 - Zaman aşımı<br>
409 - Çakışma<br>
410 - Kaynak artık yok/Kalıcı olarak bulunmuyor<br>
411 - Uzunluk (içerik boyutu) gerekli<br>
412 - Ön koşul başarısız<br>
413 - Girilen veri çok fazla<br>
414 - İstek URL’i çok büyük<br>
415 - Desteklenmeyen medya tipi<br>
416 - Kaynak kısmi geçersiz<br>
417 - İstek başarısız<br>
422 - İşlenemeyen varlık<br>
423 - Kilitli<br>
424 - Kaynak işleme alınamadı<br>
425 - Çok erken<br>
426 - Yükseltme gerekli<br>
428 - Ön koşul gerekli<br>
429 - Çok fazla istek<br>
451 - Yasal nedenlerle kullanılamıyor<br>

### **5xx: Server Error**

Kullanıcı isteğinin sunucuya başarılı bir şekilde ulaşması fakat sunucu kaynaklı sorunlar nedeniyle isteğin yerine getirilememesi hâlinde gösterilen kodların sınıfıdır. 5xx HTTP durum kodları şunlardır:

500 - Sunucu hatası<br>
501 - İstek uygulanmadı<br>
502 - Kötü ağ geçidi<br>
503 - Sunucu kullanılamıyor<br>
504 - Ağ geçidi zaman aşımı<br>
505 - HTTP sürümü desteklenmiyor<br>
507 - Yetersiz depolama<br>
509 - Bant genişliği sınırı aşıldı<br>
511 - Ağ kimlik doğrulaması gerekli<br>
521 - Web sunucusu kapalı<br>

 [**Kaynak**](https://www.w3schools.com/tags/ref_httpmessages.asp)

# <li> ***HTTP REQUEST METHODS***

-Bir web tarayıcısından bir sunucuya gönderilen istek http protokollerine göre gerçekleştirilir.

**POST** : Sunucuya veri göndermek için kullanılır.

**PUT** : Sunucuya veri göndermek için ama gönderilen veriler ile bir dosya yaratmak için kullanılır. Eğer dosya sunucuda varsa üzerinde değişiklik yapar.

**DELETE** : Sunucudaki kaynağı silmek için kullanılır. Silme işlemi yaparken kaynağı sorgulamadan bu işlemi yapar.

**GET** : Sunucudan veri almak için kullanılır.

**HEAD** : Aslında get methodu ile aynı işi yapar gönderilen veri aynıdır sunucuda olan işlemler aynıdır sunucudaki cevabı dönerken header kısmını döner.

**TRACE** : Sunucuyu kontrol amaçlı kullanılır.Bunun dışında başka bir sunucu üzerinde işlem yapmak için kullanılır.

**OPTIONS** : Sunucunun hangi methodlara kabul ettigini öğrenmek için kullanılır.

**CONNECTION** : Sunucuyu proxy gibi kullanabilmemizi sağlar yani sunucunun başka bir sunucuya istek yapmasını saglayabiliriz.

**PATH** : Bu metod bir kaynağa istediğiniz küçük çaplı değişimi yapmanızı sağlar.

[**Kaynak**]( https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
)
 

# <li> ***FETCH API METHODS*** 


[**Click Me For Examples**](./js/about.js)


# <li> ***SORT METHOD AND PAGİNATİON*** 
Not: Asistan arkadaşın yaptıklarını kopyaladım.Çalışıp tekrar commit edeceğim.

[**Click Me For HTML**](todos.html) <br>
[**Click Me For JS**](./js/todos.js)
