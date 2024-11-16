function upload(){
  var imgcanvas = document.getElementById("canv1");
  $(document).ready(function() {
    const fileUploadBox = $('.file-upload-box');
    const fileList = $('.file-list');
    const fileInput = $('.file-upload-input');
  
    // Handle drag and drop events
    fileUploadBox
        .on('dragover dragenter', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).addClass('drag-over');
        })
        .on('dragleave dragend drop', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).removeClass('drag-over');
        });
  
    // Handle file selection
    fileInput.on('change', function(e) {
        const files = e.target.files;
        handleFiles(files);
    });
  
    // Handle dropped files
    fileUploadBox.on('drop', function(e) {
        const files = e.originalEvent.dataTransfer.files;
        handleFiles(files);
    });
  
    function handleFiles(files) {
        Array.from(files).forEach(file => {
            // Create progress bar element
            const progressBar = $('<div class="upload-progress"></div>');
            
            const fileItem = $(`
                <div class="file-item">
                    <i class="fas fa-file file-icon"></i>
                    <span class="file-name" title="${file.name}">${file.name}</span>
                    <i class="fas fa-times remove-file"></i>
                    ${progressBar.prop('outerHTML')}
                </div>
            `);
  
            fileList.append(fileItem);
  
            // Remove progress bar after animation
            setTimeout(() => {
                fileItem.find('.upload-progress').remove();
            }, 1000);
  
            // Handle file removal
            fileItem.find('.remove-file').on('click', function(e) {
                e.stopPropagation();
                fileItem.fadeOut(300, function() {
                    $(this).remove();
                });
            });
  
            // Get appropriate FontAwesome icon based on file type
            const fileIcon = fileItem.find('.file-icon');
            const fileExtension = file.name.split('.').pop().toLowerCase();
            
            const iconMap = {
                'pdf': 'fa-file-pdf',
                'doc': 'fa-file-word',
                'docx': 'fa-file-word',
                'xls': 'fa-file-excel',
                'xlsx': 'fa-file-excel',
                'ppt': 'fa-file-powerpoint',
                'pptx': 'fa-file-powerpoint',
                'jpg': 'fa-file-image',
                'jpeg': 'fa-file-image',
                'png': 'fa-file-image',
                'gif': 'fa-file-image',
                'zip': 'fa-file-archive',
                'rar': 'fa-file-archive',
                'txt': 'fa-file-alt'
            };
  
            if (iconMap[fileExtension]) {
                fileIcon.removeClass('fa-file').addClass(iconMap[fileExtension]);
            }
        });
    }
  });
}