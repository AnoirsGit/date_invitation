<script>
    export let data;
</script>

<div class="card">
    <div class="imgArea">
        <img src={data.image} alt={data.title}>
    </div>
    <div class="content">
        <h2><b>{data.title}</b></h2>
        <p class="mt-3">{data.text}</p>
    </div>
</div>