package gitHub.List;

import android.os.Build;
import android.widget.DatePicker;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

public class DatePickerManager extends SimpleViewManager<CustomDatePicker>   {

    public DatePickerManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    public static final String REACT_CLASS = "UIDatePicker";
    ReactApplicationContext mCallerContext;


    @Override
    public String getName() {
        return REACT_CLASS;
    }


//    @RequiresApi(api = Build.VERSION_CODES.O)
    @RequiresApi(api = Build.VERSION_CODES.O)
    @NonNull
    @Override
    protected CustomDatePicker createViewInstance(@NonNull ThemedReactContext reactContext) {
        CustomDatePicker datePicker = new CustomDatePicker(reactContext);

//        datePicker.updateDate(2016, 5, 22);
        return  datePicker;
    }
    @ReactProp(name = "date", defaultFloat = 0f)
    public void updateDate(DatePicker datePicker, String setdate) {
        String[] newDate = setdate.split("T");
        newDate = newDate[0].split("-");
        datePicker.updateDate(Integer.parseInt(newDate[0]), Integer.parseInt(newDate[01])-1, Integer.parseInt(newDate[2]));
    }

@Nullable
@Override
public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
    return MapBuilder.of(
            "onDateChanged",
            MapBuilder.of("registrationName","onChange")
    );
}}

